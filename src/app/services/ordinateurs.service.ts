import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from '../models/Articles';
import { HttpClient } from '@angular/common/http';
import {Article} from '../components/form/form.component';



@Injectable({
  providedIn: 'root'
})
export class OrdinateursService implements OnInit{
  article: Article[];
  url = 'http://localhost:5555/Articles/';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getArticles();
  }

  getAll(): Observable<Array<Articles>> {
    return this.http.get<Array<Articles>>(this.url);
  }

  getArticles(){
    this.http.get<any>('http://localhost:5555/Articles/').subscribe(
      response => {
        console.log(response);
        this.article = response;
      }
    );
  }


}
