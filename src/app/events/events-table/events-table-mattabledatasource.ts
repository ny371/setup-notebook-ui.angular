import { MatTableDataSource } from '@angular/material/table';
import { EventsService } from '../../services/events.service';


export interface IEventsTableItem {
  id: number;
  date: string; // TODO: should this be Date type for type safety and consistency? But then it messes up sort/filter :(
  event_name: string;
  track: string;
  best_lap: string;
  car_id: number;
  sessions: Array<any>;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: IEventsTableItem[] = [];

/**
 * Data source for the EventsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EventsTableDataSource extends MatTableDataSource<IEventsTableItem> {

  constructor(private eventsService: EventsService) {
    super();
    this.eventsService.getEvents().subscribe((data: IEventsTableItem[])=>{
      this.data = data;
    });

  }
}
