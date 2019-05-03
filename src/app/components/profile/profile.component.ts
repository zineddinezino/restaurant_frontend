import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileInfo: any = [];
  constructor(private token : TokenService, private conn : CommunicationService, private auth : AuthService, private router : Router) { }

  ngOnInit() {
    this.conn.getUser().subscribe( res => {
      this.profileInfo = res;
    });
  }

  logout(event : MouseEvent)
  {
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
