import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsProductsComponent } from './sit-wms-products.component';

describe('SitWmsProductsComponent', () => {
  let component: SitWmsProductsComponent;
  let fixture: ComponentFixture<SitWmsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
