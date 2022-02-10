import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPubPrintCostAnalysisComponent } from './sit-pub-print-cost-analysis.component';

describe('SitPubPrintCostAnalysisComponent', () => {
  let component: SitPubPrintCostAnalysisComponent;
  let fixture: ComponentFixture<SitPubPrintCostAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPubPrintCostAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPubPrintCostAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
