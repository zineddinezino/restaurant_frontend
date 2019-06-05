import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TableService } from 'src/app/table.service';
import { BookService } from 'src/app/book.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { TokenService } from 'src/app/services/token.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
  isValid : boolean = true;
  isAvailable : boolean = false;
  isEmpty : boolean = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  constructor( 
  @Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<BookingFormComponent>,
  private bookService : BookService, private conn : CommunicationService, 
  private token : TokenService, private tableService : TableService,private datePipe: DatePipe,
  private _formBuilder: FormBuilder) { }
    
  ngOnInit() {
    // this.conn.getData().subscribe( res => {
    //   this.tableService.elements = res;
    // });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   
    this.limitDate  = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.date.setHours(this.date.getHours()+2);
    this.limitTime  = this.datePipe.transform(this.date, 'HH:mm');
    this.conn.get().then(res => this.tableService.elements = res);

  }
// اظن اني هكذا نجبدهم بصح يخصني نربطهم مع الخانة 
  get email() { return this.firstFormGroup.get('email'); }
  get password() { return this.secondFormGroup.get('password'); }
// here i was using ngForm that's why this onSubmit method is here but now i have to use FormGroup because of the Stepper
  onSubmit(form : NgForm)
  {
    
    if(this.formData.date > this.limitDate || (this.formData.time > this.limitTime && this.formData.date >= this.limitDate ))
    {
      this.formData.date = this.formData.date +' '+ this.formData.time;
      this.bookService.postAPIData(this.token.getId(),this.formData.size,this.formData.date).subscribe(res=> {this.tableService.elements = res});
      this.dialogRef.close();
    }else
    {
      console.log("error");
    }
  }

  validation(formData)
  {
    console.log(formData);
    this.isValid = true;
    if(formData.size==0)
      this.isValid = false;
    return this.isValid;  
  }

  ForDisable()
  {
    this.isAvailable = true;
  }
  checkTab(size,date,time)
  {
    //call method in the back to check if table empty or not
    date = date +' '+time;
    this.bookService.checkTable(size,date).subscribe( res => 
      {
        if(res != 0)
        {
          this.isEmpty = false
        }else
        {
          console.log("the table not free now");
        }
        
      })
  }
}
