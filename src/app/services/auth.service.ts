import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  private userName:string;

  constructor() {
      this.isloggedIn=false;
  }

  login(username: string, password: string) {
    //TODO: mettre le back à la place 

    this.isloggedIn=true;
    this.userName=username;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser():boolean {
    //TODO
    return false;
  }

  logoutUser(): void{
    this.isloggedIn = false;
  }
}
