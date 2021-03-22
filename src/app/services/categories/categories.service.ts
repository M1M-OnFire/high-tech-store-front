import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Articles } from 'src/app/models/Articles';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/Categories';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getItem(idCategorie: string): Observable<Array<Articles>>{
    var url =  environment.baseUrl + "/rest/categories/" + idCategorie + "/items";
    return this.http.get<Array<Articles>>(url);
  }

  getCategorie(idCategorie: string): Observable<Categories>{
    var url =  environment.baseUrl + "/rest/categories/" + idCategorie;
    return this.http.get<Categories>(url);
  }

}
