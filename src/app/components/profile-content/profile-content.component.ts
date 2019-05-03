import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss']
})
export class ProfileContentComponent implements OnInit {

  profileInfo: any = [];
  constructor(private token : TokenService, private conn : CommunicationService, private auth : AuthService, private router : Router) { }

  ngOnInit() {
    this.conn.getUser().subscribe( res => {
      this.profileInfo = res;
    });
  }

  

}
