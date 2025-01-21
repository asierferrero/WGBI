// @ts-nocheck
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Erreserba } from '../classes/erreserba';
import { Platera } from '../classes/platera';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private storage!: SQLiteObject;
  erreserbakList = new BehaviorSubject<Erreserba[]>([]);
  platerakList = new BehaviorSubject<Platera[]>([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'Azterketa_db.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.storage = db;
          this.getData();
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  getData() {
    this.httpClient.get('assets/dump.sql', { responseType: 'text' }).subscribe(data => {
      this.sqlPorter.importSqlToDb(this.storage, data)
        .then(_ => {
          this.getPlaterak();
          this.isDbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  async getPlaterak() {
    try {
      const res = await this.storage.executeSql('SELECT * FROM plateras', []);
      let items: Platera[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            cover_photo_small: res.rows.item(i).cover_photo_small,
            description: res.rows.item(i).description,
          });
        }
      }
      this.platerakList.next(items);
    } catch (error) {
      console.error("errorea getPlaterak", error);
    }
  }

  fetchPlaterak(): Observable<Platera[]> {
    return this.platerakList.asObservable();
  }

  async addErreserba(erreserba: Erreserba) {
    let data = [erreserba.name, erreserba.lastname, erreserba.dateR, erreserba.people, erreserba.lunchordinner];
    const res = await this.storage.executeSql('INSERT INTO erreserbas (name, lastname, dateR, people, lunchordinner) VALUES (?, ?, ?, ?, ?)', data);
  }
}