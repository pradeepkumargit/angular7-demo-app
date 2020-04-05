import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AsyncAwaitService {
  
  //https://www.techiediaries.com/amp/javascript-async-await-tutorial

  //http://dummy.restapiexample.com/

  //https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77

  //https://stackblitz.com/edit/angular-async-await

  //https://hackernoon.com/should-i-use-promises-or-async-await-126ab5c98789

  bitcoinRateUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';
  apiUrl = 'https://www.techiediaries.com/api/data.json';
  url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private httpClient:HttpClient,
              private http:Http) { }

  async getPrice(currency: string): Promise<string> {
    const response = await this.http.get(this.bitcoinRateUrl ).toPromise();
    return response.json().bpi[currency].rate;
  }

  fetchData(): Observable<Object> {
    return this.httpClient.get(this.apiUrl);
    // const data = this.httpClient.get(this.apiUrl);
    // console.log('What is the Data:' + JSON.stringify(data));
    // console.log('course data',JSON.stringify(data[0].name));
  }

  getAsyncData() {
    return this.httpClient.get<Employee>(this.url);
  }
}
