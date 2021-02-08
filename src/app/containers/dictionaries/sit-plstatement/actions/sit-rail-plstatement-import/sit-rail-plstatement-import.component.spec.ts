import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailPLStatementImportComponent } from './sit-rail-plstatement-import.component';

describe('SitRailPLStatementImportComponent', () => {
  let component: SitRailPLStatementImportComponent;
  let fixture: ComponentFixture<SitRailPLStatementImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailPLStatementImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailPLStatementImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
