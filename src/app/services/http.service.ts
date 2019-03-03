import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from './interface/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://www.omdbapi.com/';
  }

  getOmdb(title): Observable<Pelicula> {
    const params = new HttpParams()
      .set('t', title)
      .set('apikey', 'f12ba140');

    return this.http.get<Pelicula>(this.url, { params });
  }


}
