import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appTitle:string = 'ALZON';
  public loggedIn : boolean;
  public IsAdmin : boolean;
  constructor(
    private auth : AuthService,
    private router: Router,
    private token: TokenService
    ) { }

  ngOnInit() {
    this.auth.authStatus.subscribe(value => this.loggedIn = value);
    this.auth.adminCheck.subscribe(value => this.IsAdmin = value);
    //console.log(this.IsAdmin);
  }
  logout(event : MouseEvent)
  {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}