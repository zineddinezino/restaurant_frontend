import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookingFormComponent } from './booking-form/booking-form.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  modalFormSubscriptionName = new FormControl('', Validators.required);
  modalFormSubscriptionEmail = new FormControl('', Validators.email);
  
  constructor(private bookService : BookService, private dialog : MatDialog) { }

  ngOnInit() {
   
  }


  public addReservation(name,size,dateRes) {
    this.bookService.postAPIData(name,size,dateRes).subscribe(res=> {
      console.log(res);
    });
  }
  
  book()
  {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width ="50%";
      this.dialog.open(BookingFormComponent,dialogConfig);
  }


}
