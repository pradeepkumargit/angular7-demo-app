import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  
  public userName = new BehaviorSubject<string>('Pradeep');
  userName$ = this.userName.asObservable();

  constructor() { }

  editUserName(newUserName) {
    this.userName.next(newUserName);
  }
}
