import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  // baseUrl: string = 'http://localhost:5000/events/'
  baseUrl: string = 'https://6n28p0nta0.execute-api.us-east-1.amazonaws.com/dev/events/'
  
  getEvents(): any {
    return this.httpClient.get(this.baseUrl)
  }

  getEventDetails(event_id: number): any {
    return this.httpClient.get(this.baseUrl + event_id + '/')
  }

  // TODO: split into new sessions service?
  getSessions(event_id: number): any {
    return this.httpClient.get(this.baseUrl + event_id + '/sessions/')
  }

  getSessionDetails(event_id: number, session_id: number): any {
    return this.httpClient.get(this.baseUrl + event_id + '/sessions/' + session_id + '/')
  }
}
