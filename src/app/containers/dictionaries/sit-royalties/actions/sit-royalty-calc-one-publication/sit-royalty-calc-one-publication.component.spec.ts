import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRoyaltyCalcOnePublicationComponent } from './sit-royalty-calc-one-publication.component';

describe('SitRoyaltyCalcOnePublicationComponent', () => {
  let component: SitRoyaltyCalcOnePublicationComponent;
  let fixture: ComponentFixture<SitRoyaltyCalcOnePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRoyaltyCalcOnePublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRoyaltyCalcOnePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
