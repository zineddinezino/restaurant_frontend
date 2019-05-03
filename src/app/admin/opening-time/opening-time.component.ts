import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { EditTimeComponent } from './edit-time/edit-time.component';

@Component({
  selector: 'app-opening-time',
  templateUrl: './opening-time.component.html',
  styleUrls: ['./opening-time.component.scss']
})
export class OpeningTimeComponent implements OnInit {

  constructor(private conn : CommunicationService,private dialog : MatDialog) { }

  ngOnInit() {
    this.conn.getSchedule().subscribe(res =>{
      this.conn.elements = res;
    });
  }

  Edit(id)
  {
    const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width ="50%";
      dialogConfig.data = {id};
      this.dialog.open(EditTimeComponent,dialogConfig);
  }

  public reset()
  {
    this.conn.getSchedule().subscribe( res => {
      this.conn.elements = res;
    });
  }
  public onDelete(id)
  {
    this.conn.delete(id).subscribe( res => {
      this.conn.elements = res;
      this.reset();
    });
  }
}
