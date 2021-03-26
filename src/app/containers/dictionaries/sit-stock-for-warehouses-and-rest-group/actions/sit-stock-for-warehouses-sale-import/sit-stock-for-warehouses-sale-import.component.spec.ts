import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStockForWarehousesSaleImportComponent } from './sit-stock-for-warehouses-sale-import.component';

describe('SitStockForWarehousesSaleImportComponent', () => {
  let component: SitStockForWarehousesSaleImportComponent;
  let fixture: ComponentFixture<SitStockForWarehousesSaleImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStockForWarehousesSaleImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStockForWarehousesSaleImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
