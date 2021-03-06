import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductSaleStatusIntervalsEditComponent } from './sit-product-sale-status-intervals-edit.component';

describe('SitProductSaleStatusIntervalsEditComponent', () => {
  let component: SitProductSaleStatusIntervalsEditComponent;
  let fixture: ComponentFixture<SitProductSaleStatusIntervalsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProductSaleStatusIntervalsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductSaleStatusIntervalsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
