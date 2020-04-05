import { Component, OnInit } from '@angular/core';
import { UsernameService } from '../service/username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  userName:string;
  constructor(private usernameService:UsernameService) { }

  ngOnInit() {
    this.usernameService.userName$.subscribe(userName => this.userName = userName);
  }
}
