import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAggrDaySalesComponent } from './sit-aggr-day-sales.component';

describe('SitAggrDaySalesComponent', () => {
  let component: SitAggrDaySalesComponent;
  let fixture: ComponentFixture<SitAggrDaySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAggrDaySalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAggrDaySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
