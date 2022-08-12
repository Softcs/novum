import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingContainersTypesEditComponent } from './sit-wms-packing-containers-types-edit.component';

describe('SitWmsPackingContainersTypesEditComponent', () => {
  let component: SitWmsPackingContainersTypesEditComponent;
  let fixture: ComponentFixture<SitWmsPackingContainersTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingContainersTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingContainersTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
