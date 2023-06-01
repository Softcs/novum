import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAnalysisPublishingPlanComponent } from './sit-analysis-publishing-plan.component';

describe('SitAnalysisPublishingPlanComponent', () => {
  let component: SitAnalysisPublishingPlanComponent;
  let fixture: ComponentFixture<SitAnalysisPublishingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAnalysisPublishingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAnalysisPublishingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
