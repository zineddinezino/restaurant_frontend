import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { TableService } from 'src/app/table.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { NewTabComponent } from '../new-tab/new-tab.component';
import { EditTableComponent } from '../edit-table/edit-table.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  public form = {
    capacity:null
  };
  
  

  constructor(private conn : CommunicationService, private tableService : TableService,
    private dialog : MatDialog) { }

  ngOnInit() {
    this.conn.getData().subscribe( res => {
      this.tableService.elements = res;
    });
  }


  // addTable(capacity)
  //   {
  //     this.tableService.postTabData(capacity).subscribe(res=> {
  //     //show message that table added succesfully
  //     //and call showTab if display is true
  //     });
  //   }

    onSubmit(){
      this.tableService.postTabData(this.form).subscribe(res=> {
        //show message that table added succesfully
        //and call showTab if display is true
        });
    }
    AddTab()
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width ="50%";
      this.dialog.open(NewTabComponent,dialogConfig);
    }
    public reset()
    {
      this.conn.getData().subscribe( res => {
        this.tableService.elements = res;
      });
    }
    public onDelete(id)
    {
      this.conn.DeleteTab(id).subscribe( res => {
        this.tableService.elements = res;
        this.reset();
      });
    }

    public EditTab(id)
    {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width ="50%";
      dialogConfig.data = {id};
      this.dialog.open(EditTableComponent,dialogConfig);


      // this.conn.Update(id,size).subscribe( res => {
      //   this.tableService.elements = res;
      //   this.reset();
      // });
    }
}
