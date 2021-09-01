import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPubCostAnalysisComponent } from './sit-pub-cost-analysis.component';

describe('SitPubCostAnalysisComponent', () => {
  let component: SitPubCostAnalysisComponent;
  let fixture: ComponentFixture<SitPubCostAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPubCostAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPubCostAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
