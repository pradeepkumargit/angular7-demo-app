import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() attributesUpdated = new EventEmitter<boolean>();
  attributesChanged:boolean= false;
  constructor() { }

  ngOnInit() {
  }

  updatedAttributes() {
    let me = this;
    this.attributesChanged = true;
    console.log('event from child');
    me.attributesUpdated.emit(this.attributesChanged);
  }
}
