import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2bProductsComponent } from './sit-b2b-products.component';

describe('SitB2bProductsComponent', () => {
  let component: SitB2bProductsComponent;
  let fixture: ComponentFixture<SitB2bProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2bProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2bProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
