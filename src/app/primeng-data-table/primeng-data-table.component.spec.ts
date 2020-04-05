import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDataTableComponent } from './primeng-data-table.component';

describe('PrimengDataTableComponent', () => {
  let component: PrimengDataTableComponent;
  let fixture: ComponentFixture<PrimengDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
