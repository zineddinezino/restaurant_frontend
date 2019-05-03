import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject <boolean>(this.token.loggedIn());
  private IsAdmin = new BehaviorSubject <boolean>(this.token.IsAdmin());
  authStatus = this.loggedIn.asObservable();
  adminCheck = this.IsAdmin.asObservable();

  changeAuthStatus(value : boolean)
  {
    this.loggedIn.next(value);
  }
  constructor(private token : TokenService) { }
}
