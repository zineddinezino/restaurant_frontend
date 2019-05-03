import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { NgForm } from '@angular/forms';
import { TableService } from 'src/app/table.service';
@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.scss']
})
export class NewTabComponent implements OnInit {
  // public form = {
  //   capacity:null
  // };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<NewTabComponent>,
    private tableService : TableService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    //this.tableService.elements.push(form.value);
    console.log(form.value);
    this.tableService.postTabData(form).subscribe( res => {
      this.tableService.elements = res;
    });
    this.dialogRef.close();
  }

  add(capa)
  {
    this.tableService.postTab(capa).subscribe( res => {
      this.tableService.elements =res ;
    });
    this.dialogRef.close();
  }
}
