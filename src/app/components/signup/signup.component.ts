import { Component, OnInit } from '@angular/core';
import { SendingService } from 'src/app/services/sending.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form = {
    email : null,
    name : null,
    password : null,
    password_confirmation : null
  };
  public error = null;
  constructor(
    private send : SendingService,
    private token : TokenService,
    private router : Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.send.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.error;
  }

  handleResponse(data)
  {
    this.token.handleToken(data.api_token);
    this.router.navigateByUrl('/profile');
  }
}
