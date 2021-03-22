import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articles } from 'src/app/models/Articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }


  get(id: string): Observable<Articles> {
    var url = environment.baseUrl + "/rest/items/" + id
    return this.http.get<Articles>(url);
  }
}
