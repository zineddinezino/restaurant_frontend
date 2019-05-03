import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  elements: any = [];


  constructor(private conn : CommunicationService) { }

  ngOnInit() {
  this.conn.getBookingList().subscribe( res => {
      this.elements = res;
    });
    
  }

  public update()
  {
    this.conn.getBookingList().subscribe( res => {
      this.elements = res;
    });
  }
  public onDelete(id)
  {
    this.conn.DeleteRes(id).subscribe( res => {
      this.elements = res;
      this.update();
    });
  }
}
