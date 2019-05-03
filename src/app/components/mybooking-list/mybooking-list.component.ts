import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-mybooking-list',
  templateUrl: './mybooking-list.component.html',
  styleUrls: ['./mybooking-list.component.scss']
})
export class MybookingListComponent implements OnInit {
  elements: any = [];
  constructor(private conn : CommunicationService) { }

  ngOnInit() {
    this.conn.getRes().subscribe( res => {
      this.elements = res;
    });
  }

  public onDelete(id)
  {
    console.log(id);
    this.conn.DeleteRes(id).subscribe( res => {
      this.elements = res;
    });
  }
}
