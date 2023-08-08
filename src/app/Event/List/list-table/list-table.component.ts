import { Component, OnInit, ViewChild } from '@angular/core';
import { EventModel } from "../Models/event.model";
import { EventService } from "../../event.service";
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
  @ViewChild('dt2') dt2!: Table;
  events: EventModel[] = [];
  loading: boolean = true;
  filterText: string = '';
  constructor(private eventService: EventService) { }


  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    setTimeout(() => {
      this.events = [
        {
          id: 1,
          county: 'County 1',
          district: 'District 1',
          locality: 'Locality 1',
          location: 'Location 1',
          date_time: '2023-08-07',
          status: 'Open'
        },
        {
          id: 2,
          county: 'County 2',
          district: 'District 2',
          locality: 'Locality 2',
          location: 'Location 2',
          date_time: '2023-08-07',
          status: 'Open'
        },
        {
          id: 3,
          county: 'County 3',
          district: 'District 3',
          locality: 'Locality 3',
          location: 'Location 3',
          date_time: '2023-08-07',
          status: 'Closed'
        },
        {
          id: 4,
          county: 'County 4',
          district: 'District 4',
          locality: 'Locality 4',
          location: 'Location 4',
          date_time: '2023-08-07',
          status: 'Closed'
        },
      ];

      this.loading = false;
    }, 2000);
  }

  clear(table: any) {
    table.clear();
  }

  onSearchInputChange(searchText: string) {
    this.filterText = searchText;
    if (this.dt2) {
      this.dt2.filterGlobal(this.filterText, 'contains');
    }
  }


}
