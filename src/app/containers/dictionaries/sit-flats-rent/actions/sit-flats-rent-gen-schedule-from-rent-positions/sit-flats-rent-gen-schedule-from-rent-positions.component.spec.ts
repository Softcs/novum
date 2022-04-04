import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentGenScheduleFromRentPositionsComponent } from './sit-flats-rent-gen-schedule-from-rent-positions.component';

describe('SitFlatsRentGenScheduleFromRentPositionsComponent', () => {
  let component: SitFlatsRentGenScheduleFromRentPositionsComponent;
  let fixture: ComponentFixture<SitFlatsRentGenScheduleFromRentPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentGenScheduleFromRentPositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentGenScheduleFromRentPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
