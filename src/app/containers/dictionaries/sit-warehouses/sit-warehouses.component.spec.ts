import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitWarehousesComponent } from './sit-warehouses.component';

describe('SitWarehousesComponent', () => {
  let component: SitWarehousesComponent;
  let fixture: ComponentFixture<SitWarehousesComponent>;

  beforeEach(waitForAsync(() => {
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
