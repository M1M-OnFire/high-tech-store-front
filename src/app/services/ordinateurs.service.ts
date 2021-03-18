import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../models/Items';
import { HttpClient } from '@angular/common/http';
import {Item} from '../components/form/form.component';



@Injectable({
  providedIn: 'root'
})
export class OrdinateursService implements OnInit{
  item: Items[];
  url = 'http://localhost:5555/Articles/';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getArticles();
  }

  getAll(): Observable<Array<Items>> {
    return this.http.get<Array<Items>>(this.url);
  }

  getArticles(){
    this.http.get<any>('http://localhost:5555/Articles/').subscribe(
      response => {
        console.log(response);
        this.item = response;
      }
    );
  }


}
