import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EventsService } from '../../services/events.service';
// import { EventsTableDataSource, IEventsTableItem } from './events-table-datasource';
import { EventsTableDataSource, IEventsTableItem } from './events-table-mattabledatasource';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IEventsTableItem>;
  dataSource: EventsTableDataSource;
  filterValue: string = '';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['date', 'eventName', 'track', 'bestLap'];

  constructor(private eventsService: EventsService) {
    this.dataSource = new EventsTableDataSource(eventsService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  applyFilter(event:Event|string) {
    if ( event instanceof Event ) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    else {
      this.dataSource.filter = ''
    }
  }

  logIt(row:any) {
    console.log(row)
  }
}
