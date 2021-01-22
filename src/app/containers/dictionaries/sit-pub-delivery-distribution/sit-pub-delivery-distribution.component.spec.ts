import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPubDeliveryDistributionComponent } from './sit-pub-delivery-distribution.component';

describe('SitPubDeliveryDistributionComponent', () => {
  let component: SitPubDeliveryDistributionComponent;
  let fixture: ComponentFixture<SitPubDeliveryDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPubDeliveryDistributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPubDeliveryDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
