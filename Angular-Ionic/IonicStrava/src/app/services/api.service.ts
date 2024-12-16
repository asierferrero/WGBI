import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Kluba } from '../classes/kluba';
import { Jarduera } from '../classes/jarduera';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private storage!: SQLiteObject;
  klubakList = new BehaviorSubject<Kluba[]>([]);
  JarduerakList = new BehaviorSubject<Jarduera[]>([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Strava_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getData();
        });
    });
  }
  //Datu basea listo dagoen jakiteko, tab1 orrian erabiltzen da
  dbState() {
    return this.isDbReady.asObservable();
  }
  // Render data
  getData() {
    //Lehen aldia bada, taula sortuko du datu batzuekin (sqlPorter erabiltzen du sql-tik datubasera pasatzeko). Gero konexioa badago sinkronizatu eta amaieran getKlubak() exekutatuko da.
    this.httpClient.get(
      'assets/dump.sql',
      { responseType: 'text' }
    ).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getKlubak();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }
  // Kluben zerrenda prestatu, konstruktoreetik deitzen zaio
  async getKlubak() {
    try {
      const res = await this.storage.executeSql('SELECT * FROM klubas', []);
      let items: Kluba[] = [];
      console.log(res);
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            cover_photo_small: res.rows.item(i).cover_photo_small,
            sport_type: res.rows.item(i).sport_type,
            private: res.rows.item(i).privatea,
            member_count: res.rows.item(i).member_count,
            description: res.rows.item(i).description,
            club_type: res.rows.item(i).club_type,
            jarduerak: []
          });
        }
      }
      this.klubakList.next(items);
    } catch (error) {
      console.error("errorea getKlubak", error);
    }
  }

  //getKlubak() sortutako zerrenda bueltatzen du, tab1 orrian erabiltzen da
  fetchKlubak(): Observable<Kluba[]> {
    return this.klubakList.asObservable();
  }
}