import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TableService } from 'src/app/table.service';
import { BookService } from 'src/app/book.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { TokenService } from 'src/app/services/token.service';
import { NgForm } from '@angular/forms';
import { DatePipe, formatDate, getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
  providers: [DatePipe]
})
export class BookingFormComponent implements OnInit {
  formData = {
    size : null,
    date : null,
    time : null
  }
  limitDate : string;
  limitTime : string;
  date = new Date();

  constructor( 
  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<BookingFormComponent>,
  private bookService : BookService, private conn : CommunicationService, 
  private token : TokenService, private tableService : TableService,private datePipe: DatePipe) { }
    
  ngOnInit() {
    // this.conn.getData().subscribe( res => {
    //   this.tableService.elements = res;
    // });
   
    this.limitDate  = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.date.setHours(this.date.getHours()+2);
    this.limitTime  = this.datePipe.transform(this.date, 'HH:mm');
    console.log(this.limitTime);
    console.log(this.limitDate);
    this.conn.get().then(res => this.tableService.elements = res);

  }

  onSubmit(form : NgForm)
  {
    if(this.formData.date > this.limitDate || (this.formData.time > this.limitTime && this.formData.date >= this.limitDate ))
    {
    this.formData.date = this.formData.date +' '+ this.formData.time;
   console.log(this.token.getId());
   
   this.bookService.postAPIData(this.token.getId(),this.formData.size,this.formData.date).subscribe(res=> {
     console.log(res);
   });
  }else
  {
    console.log("error");
  }
  }
}
