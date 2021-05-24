import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAggrDayStockTurnoverComponent } from './sit-aggr-day-stock-turnover.component';

describe('SitAggrDayStockTurnoverComponent', () => {
  let component: SitAggrDayStockTurnoverComponent;
  let fixture: ComponentFixture<SitAggrDayStockTurnoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAggrDayStockTurnoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAggrDayStockTurnoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
