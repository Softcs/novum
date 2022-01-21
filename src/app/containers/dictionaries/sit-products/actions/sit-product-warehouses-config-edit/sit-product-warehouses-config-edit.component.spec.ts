import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductWarehousesConfigEditComponent } from './sit-product-warehouses-config-edit.component';

describe('SitProductWarehousesConfigEditComponent', () => {
  let component: SitProductWarehousesConfigEditComponent;
  let fixture: ComponentFixture<SitProductWarehousesConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProductWarehousesConfigEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductWarehousesConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
