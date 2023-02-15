import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAggrMonthSaleByAuthorComponent } from './sit-aggr-month-sale-by-author.component';

describe('SitAggrMonthSaleByAuthorComponent', () => {
  let component: SitAggrMonthSaleByAuthorComponent;
  let fixture: ComponentFixture<SitAggrMonthSaleByAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAggrMonthSaleByAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAggrMonthSaleByAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
