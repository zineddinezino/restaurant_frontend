import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TableService } from 'src/app/table.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss']
})
export class EditTableComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<EditTableComponent>,
  private tableService : TableService,
  private conn : CommunicationService) { }

  ngOnInit() {
  }


  edit(capa)
  {
    this.conn.Update(this.data.id,capa).subscribe( res => {
      this.tableService.elements = res;
      this.reset();
    });
    this.dialogRef.close();
  }
  public reset()
  {
    this.conn.getData().subscribe( res => {
      this.tableService.elements = res;
    });
  }
}
