import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStockForWarehousesAndRestGroupComponent } from './sit-stock-for-warehouses-and-rest-group.component';

describe('SitStockForWarehousesAndRestGroupComponent', () => {
  let component: SitStockForWarehousesAndRestGroupComponent;
  let fixture: ComponentFixture<SitStockForWarehousesAndRestGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStockForWarehousesAndRestGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStockForWarehousesAndRestGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
