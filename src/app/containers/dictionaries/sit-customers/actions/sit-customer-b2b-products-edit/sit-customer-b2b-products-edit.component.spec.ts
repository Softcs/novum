import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerB2bProductsEditComponent } from './sit-customer-b2b-products-edit.component';

describe('SitCustomerB2bProductsEditComponent', () => {
  let component: SitCustomerB2bProductsEditComponent;
  let fixture: ComponentFixture<SitCustomerB2bProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerB2bProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerB2bProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
