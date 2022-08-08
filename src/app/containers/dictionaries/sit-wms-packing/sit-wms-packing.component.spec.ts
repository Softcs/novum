import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingComponent } from './sit-wms-packing.component';

describe('SitWmsPackingComponent', () => {
  let component: SitWmsPackingComponent;
  let fixture: ComponentFixture<SitWmsPackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
