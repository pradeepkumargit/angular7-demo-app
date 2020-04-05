import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public attributesDone: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  getAttributesUpdatedFlag(event) {
    console.log('what is event',event)
    let me = this;
    me.attributesDone = event;
    if (me.attributesDone) {
      me.loadingActivityListTable();
    }
  }

  loadingActivityListTable() {
    console.log('Activity list table data loaded')
  }

}
