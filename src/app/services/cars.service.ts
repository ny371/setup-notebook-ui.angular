import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  // baseUrl: string = 'http://localhost:5000/cars/'
  baseUrl: string = 'https://6n28p0nta0.execute-api.us-east-1.amazonaws.com/dev/cars/'

  constructor(private httpCLient: HttpClient) { }

  getCars(): any {
    return this.httpCLient.get(this.baseUrl)
  }

  getCarDetails(id: number): any {
    return this.httpCLient.get(this.baseUrl + id + '/')
  }
}
