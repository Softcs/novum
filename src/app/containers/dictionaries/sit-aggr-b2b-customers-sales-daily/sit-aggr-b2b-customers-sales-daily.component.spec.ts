import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAggrB2bCustomersSalesDailyComponent } from './sit-aggr-b2b-customers-sales-daily.component';

describe('SitAggrB2bCustomersSalesDailyComponent', () => {
  let component: SitAggrB2bCustomersSalesDailyComponent;
  let fixture: ComponentFixture<SitAggrB2bCustomersSalesDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAggrB2bCustomersSalesDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAggrB2bCustomersSalesDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
