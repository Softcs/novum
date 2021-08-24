import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProcRailCostAnalysisImportEditComponent } from './sit-proc-rail-cost-analysis-import-edit.component';

describe('SitProcRailCostAnalysisImportEditComponent', () => {
  let component: SitProcRailCostAnalysisImportEditComponent;
  let fixture: ComponentFixture<SitProcRailCostAnalysisImportEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProcRailCostAnalysisImportEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcRailCostAnalysisImportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
