import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAnalysisPublishigPlanComponent } from './sit-analysis-publishig-plan.component';

describe('SitAnalysisPublishigPlanComponent', () => {
  let component: SitAnalysisPublishigPlanComponent;
  let fixture: ComponentFixture<SitAnalysisPublishigPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAnalysisPublishigPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAnalysisPublishigPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
