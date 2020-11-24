import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWarehousesEditComponent } from './sit-warehouses-edit.component';

describe('SitWarehousesEditComponent', () => {
  let component: SitWarehousesEditComponent;
  let fixture: ComponentFixture<SitWarehousesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitWarehousesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWarehousesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
