import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/Articles';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrdinateursService {

  url = 'http://localhost:5555/Articles/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
  }
}
