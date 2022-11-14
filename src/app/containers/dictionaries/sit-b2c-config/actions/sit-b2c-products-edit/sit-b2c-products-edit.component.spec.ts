import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cProductsEditComponent } from './sit-b2c-products-edit.component';

describe('SitB2cProductsEditComponent', () => {
  let component: SitB2cProductsEditComponent;
  let fixture: ComponentFixture<SitB2cProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
