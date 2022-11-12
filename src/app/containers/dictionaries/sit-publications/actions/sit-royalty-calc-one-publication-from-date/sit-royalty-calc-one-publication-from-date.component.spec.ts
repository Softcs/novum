import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRoyaltyCalcOnePublicationFromDateComponent } from './sit-royalty-calc-one-publication-from-date.component';

describe('SitRoyaltyCalcOnePublicationFromDateComponent', () => {
  let component: SitRoyaltyCalcOnePublicationFromDateComponent;
  let fixture: ComponentFixture<SitRoyaltyCalcOnePublicationFromDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRoyaltyCalcOnePublicationFromDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRoyaltyCalcOnePublicationFromDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
