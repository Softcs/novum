import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingContainersEditComponent } from './sit-wms-packing-containers-edit.component';

describe('SitWmsPackingContainersEditComponent', () => {
  let component: SitWmsPackingContainersEditComponent;
  let fixture: ComponentFixture<SitWmsPackingContainersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingContainersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingContainersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
