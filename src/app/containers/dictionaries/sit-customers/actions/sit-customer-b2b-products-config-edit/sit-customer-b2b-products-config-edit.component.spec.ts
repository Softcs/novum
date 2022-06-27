import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerB2bProductsConfigEditComponent } from './sit-customer-b2b-products-config-edit.component';

describe('SitCustomerB2bProductsConfigEditComponent', () => {
  let component: SitCustomerB2bProductsConfigEditComponent;
  let fixture: ComponentFixture<SitCustomerB2bProductsConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerB2bProductsConfigEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerB2bProductsConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
