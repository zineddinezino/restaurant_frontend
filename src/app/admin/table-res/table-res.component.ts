import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';


@Component({
  selector: 'app-table-res',
  templateUrl: './table-res.component.html',
  styleUrls: ['./table-res.component.scss']
})
export class TableResComponent implements OnInit {
  elements: any = [];

  // headElements = ['ID', 'Name', 'State', 'Date'];
  headElements = ['ID', 'Capacity'];
  display = false; 
  constructor(private conn : CommunicationService) { }

  ngOnInit() {
  }

  public ShowTab()
  {
    this.conn.getData().subscribe( res => {
      this.elements = res;
      this.display = true;
    });
  }
}
