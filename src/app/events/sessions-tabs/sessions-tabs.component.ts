import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-sessions-tabs',
  templateUrl: './sessions-tabs.component.html',
  styleUrls: ['./sessions-tabs.component.css']
})
export class SessionsTabsComponent implements OnInit {
  eventId: number = 0;
  sessionList: Array<any> = [];

  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let eventId = Number(params.get('id'));
      if (eventId)
        this.eventId = eventId;
    });

    this.eventsService.getSessions(this.eventId).subscribe((data: any) => {
      this.sessionList = data;
    })

  }
}
