import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  private user:User;
  private url = 'http://localhost:8080/rest_shop_war_exploded/rest/connexion'

  constructor(private http: HttpClient) {
      this.isloggedIn=false;
  }

  login(username: string, password: string) {
    this.http.post<User>(this.url, {username, password}).subscribe(
      user =>{
        if(user) {
          user = this.user;
          this.isloggedIn=true;
        }
    });
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  logoutUser(): void{
    this.isloggedIn = false;
  }
}
