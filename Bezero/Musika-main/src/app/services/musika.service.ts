import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Musika } from '../interfaces/musika';

@Injectable({
  providedIn: 'root'
})
export class MusikasService {

  constructor(private httpClient: HttpClient) {}

  getAll(): Promise<any> {
    const jsonUrl = 'assets/musikak.json';

    return firstValueFrom(
      this.httpClient.get<Musika[]>(jsonUrl)
    );
  }
}