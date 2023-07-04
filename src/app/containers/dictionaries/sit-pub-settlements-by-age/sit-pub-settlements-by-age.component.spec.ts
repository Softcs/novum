import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPubSettlementsByAgeComponent } from './sit-pub-settlements-by-age.component';

describe('SitPubSettlementsByAgeComponent', () => {
  let component: SitPubSettlementsByAgeComponent;
  let fixture: ComponentFixture<SitPubSettlementsByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPubSettlementsByAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPubSettlementsByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
