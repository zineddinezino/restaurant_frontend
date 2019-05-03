import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-edit-time',
  templateUrl: './edit-time.component.html',
  styleUrls: ['./edit-time.component.scss']
})
export class EditTimeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef:MatDialogRef<EditTimeComponent>,
  private conn : CommunicationService) { }

  ngOnInit() {
  }

  edit(start,end)
  {
    start = start+':00';
    end = end+':00';
    console.log(start,end);
    this.conn.update(this.data.id,start,end).subscribe( res => {
      this.conn.elements = res;
      this.reset();
    });
    this.dialogRef.close();
  }
  public reset()
  {
    this.conn.getSchedule().subscribe( res => {
      this.conn.elements = res;
    });
  }
}
