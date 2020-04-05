import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  userName:string;
  editUser:string;
  constructor(private usernameService:UsernameService) { }

  ngOnInit() {
    this.usernameService.userName$.subscribe(userName => this.userName = userName);
  }

  editUserName() {
    this.usernameService.editUserName(this.editUser);
  }
}
