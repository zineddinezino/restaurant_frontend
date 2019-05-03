import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { CommunicationService } from '../services/communication.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public isHover : boolean;
 isValid : boolean = true;
 modalFormSubscriptionName = new FormControl('', Validators.required);
 modalFormSubscriptionSize = new FormControl('', Validators.required);
 modalFormSubscriptionDate = new FormControl('', Validators.required);
 modalFormSubscriptionTime = new FormControl('', Validators.required);
 
 constructor(private bookService : BookService, private conn : CommunicationService, private token : TokenService) { }
  elements : any = [];
 ngOnInit() {
  this.conn.getTime().subscribe( res => {
    this.elements = res;
  });
 }



 public addReservation(size,dateRes,time) {
   if(size==null)
   {
     this.isValid = false;
   }
   else{
   dateRes = dateRes +' '+ time;
   console.log(this.token.getId());
   this.bookService.postAPIData(this.token.getId(),size,dateRes).subscribe(res=> {
     console.log(res);
   });
  }
 }
  mouseEnter()
  {
    this.isHover = true;
  }
  mouseLeave()
  {
    this.isHover = false;
  }

}
