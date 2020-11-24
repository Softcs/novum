import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWarehousesComponent } from './sit-warehouses.component';

describe('SitWarehousesComponent', () => {
  let component: SitWarehousesComponent;
  let fixture: ComponentFixture<SitWarehousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitWarehousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
