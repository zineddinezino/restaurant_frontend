import { Component, OnInit } from '@angular/core';

import { SendingService } from 'src/app/services/sending.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    email:null,
    password:null
  };
  public error = null;
  constructor(
    private send: SendingService,
    private token : TokenService,
    private router : Router,
    private auth : AuthService
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.send.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error)
  {
    this.error = error.error.error;
  }

  handleResponse(data)
  {
    console.log(data);
    this.token.handleId(data.id);
    this.token.handleToken(data.api_token);
    this.token.handleAdmin(data.admin);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }
}
