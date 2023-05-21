import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAnalysisProductsProfitabilityComponent } from './sit-analysis-products-profitability.component';

describe('SitAnalysisProductsProfitabilityComponent', () => {
  let component: SitAnalysisProductsProfitabilityComponent;
  let fixture: ComponentFixture<SitAnalysisProductsProfitabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAnalysisProductsProfitabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAnalysisProductsProfitabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
