import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingContainerProductsEditComponent } from './sit-wms-packing-container-products-edit.component';

describe('SitWmsPackingContainerProductsEditComponent', () => {
  let component: SitWmsPackingContainerProductsEditComponent;
  let fixture: ComponentFixture<SitWmsPackingContainerProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingContainerProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingContainerProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
