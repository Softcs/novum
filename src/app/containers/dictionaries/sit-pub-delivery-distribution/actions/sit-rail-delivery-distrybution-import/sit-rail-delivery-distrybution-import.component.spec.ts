import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailDeliveryDistrybutionImportComponent } from './sit-rail-delivery-distrybution-import.component';

describe('SitRailDeliveryDistrybutionImportComponent', () => {
  let component: SitRailDeliveryDistrybutionImportComponent;
  let fixture: ComponentFixture<SitRailDeliveryDistrybutionImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailDeliveryDistrybutionImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailDeliveryDistrybutionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
