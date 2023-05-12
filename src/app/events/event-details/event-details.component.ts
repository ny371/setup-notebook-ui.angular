import { Component, OnInit } from '@angular/core';
import { IEventsTableItem } from '../events-table/events-table-mattabledatasource';
import { EventsService } from '../../services/events.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit{
  panelOpenState = true;
  expanded: any = true;
  eventDetails: IEventsTableItem; // can use eventDetails!: IEventsTableItem to allow it to be uninitialized but still set to a type
  eventId: number = 0;
  carId: number = 0;
  carDetails: string = '';

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private carsService: CarsService) {
    this.eventDetails = {
      id: 0,
      eventName: 'null',
      date: '01/01/1900',
      track: 'null',
      bestLap: 'null',
      car_id: 0,
      sessions: []
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let eventId = Number(params.get('id'));
      if (eventId)
        this.eventId = eventId;
      // console.log(this.eventId)
    });

    this.eventsService.getEventDetails(this.eventId).subscribe((data: IEventsTableItem) => {
      // console.log(data);
      this.eventDetails = data;
      console.log(data);
      this.carId = data['car_id'];
    });

    this.carsService.getCarDetails(this.carId).subscribe((data: any) => {
      this.carDetails = data;
    });
  }

  logIt(eventDetails:any) {
    console.log(eventDetails)
  }
}
