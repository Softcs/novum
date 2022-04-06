import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentScheduleReceivablesEditComponent } from './sit-flats-rent-schedule-receivables-edit.component';

describe('SitFlatsRentScheduleReceivablesEditComponent', () => {
  let component: SitFlatsRentScheduleReceivablesEditComponent;
  let fixture: ComponentFixture<SitFlatsRentScheduleReceivablesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentScheduleReceivablesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentScheduleReceivablesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
