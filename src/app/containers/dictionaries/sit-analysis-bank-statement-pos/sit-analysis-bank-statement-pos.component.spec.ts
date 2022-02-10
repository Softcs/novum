import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAnalysisBankStatementPosComponent } from './sit-analysis-bank-statement-pos.component';

describe('SitAnalysisBankStatementPosComponent', () => {
  let component: SitAnalysisBankStatementPosComponent;
  let fixture: ComponentFixture<SitAnalysisBankStatementPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAnalysisBankStatementPosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAnalysisBankStatementPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
