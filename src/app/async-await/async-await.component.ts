import { Component, OnInit } from '@angular/core';
import { AsyncAwaitService } from '../service/async-await.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  price:any;
  currency:string;
  courses:any = [];
  apiUrl = 'https://www.techiediaries.com/api/data.json';
  url = 'http://dummy.restapiexample.com/api/v1/employees';

  subscribeResult: Employee;
  promiseResult: Employee;
  asyncResult: Employee;

  conditionalPromiseResult: Employee;
  conditionalAsyncResult: Employee;

  additionPromiseResult: number;
  additionAsyncResult: number;
  
  constructor(private asyncAwaitService:AsyncAwaitService,private httpClient:HttpClient) { }

  // async ngOnInit() {
  //   this.price = await this.asyncAwaitService.getPrice(this.currency)
  // }

  ngOnInit() {
    //this.fetchData();
    //this.getValueWithPromise();
    //this.getValueWithAsync();
    //this.addWithSync();
    //this.getDataUsingSubscribe();
    //this.getDataUsingPromise();
    this.getAsyncData();
  }
  // async fetchData() {
  //   const data = await this.httpClient.get(this.apiUrl).toPromise();
  //   console.log('What is the Data:' + JSON.stringify(data));
  //   console.log('course data',JSON.stringify(data[0].name));
  // }
  fetchData() {
    this.asyncAwaitService.fetchData().subscribe(
      response => {
        console.log('normal data fetch', response)
        this.courses = response;
      }
    );
  }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  getValueWithPromise() {
    this.resolveAfter2Seconds(20).then(value => {
      console.log(`promise result: ${value}`);
    });
    console.log('I will not wait until promise is resolved');
  }

  async getValueWithAsync() {
    const value = <number> await this.resolveAfter2Seconds(20);
    console.log(`async result: ${value}`);
  }

  async addWithSync() {
    const result1 = <number> await this.resolveAfter2Seconds(20);
    const result2 = <number> await this.resolveAfter2Seconds(30);
    this.additionAsyncResult = result1 + result2;
    console.log(`async result for addition: ${this.additionAsyncResult}`);
  }
  //Get HttpClient result using Observable:
  getDataUsingSubscribe() {
    this.asyncAwaitService.getEmployeeData().subscribe(data =>{
      this.subscribeResult = data;
      console.log('Subscibe Executed.')
      console.log('Subscibe Executed data',this.subscribeResult);
    });
    console.log('I will not wait until promise is resolved');
  }

  //Get HttpClient result using toPromise:
  getDataUsingPromise() {
    this.asyncAwaitService.getEmployeeData().toPromise().then( data => {
      this.promiseResult = data;
      console.log('Promise Executed');
      console.log('Promise Executed Data',data);
    });
    console.log('I will not wait until promise is resolved');
  }
  //Get HttpClient result using async-await:

  async getAsyncData() {
    this.asyncResult = await this.asyncAwaitService.getEmployeeData().toPromise();
    console.log('No issues, I will wait until promise is resolved..');
    console.log('Async Data',this.asyncResult);
  }

}
