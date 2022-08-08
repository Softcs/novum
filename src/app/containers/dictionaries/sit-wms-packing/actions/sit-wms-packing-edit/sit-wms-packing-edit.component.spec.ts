import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingEditComponent } from './sit-wms-packing-edit.component';

describe('SitWmsPackingEditComponent', () => {
  let component: SitWmsPackingEditComponent;
  let fixture: ComponentFixture<SitWmsPackingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
