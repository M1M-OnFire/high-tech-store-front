import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:User;
  private url = 'http://localhost:8080/rest_shop_war_exploded/rest/connexion'

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    this.http.post<User>(this.url, {username, password}).subscribe(
      user =>{
        if(user) {
          console.log(user);
          user = this.user;
          localStorage.setItem('ACCESS_TOKEN', "access_token");
        }
    });
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  logoutUser(): void{
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
