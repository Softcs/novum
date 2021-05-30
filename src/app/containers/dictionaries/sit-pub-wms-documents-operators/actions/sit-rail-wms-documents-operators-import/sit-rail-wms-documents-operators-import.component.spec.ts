import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailWmsDocumentsOperatorsImportComponent } from './sit-rail-wms-documents-operators-import.component';

describe('SitRailWmsDocumentsOperatorsImportComponent', () => {
  let component: SitRailWmsDocumentsOperatorsImportComponent;
  let fixture: ComponentFixture<SitRailWmsDocumentsOperatorsImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailWmsDocumentsOperatorsImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailWmsDocumentsOperatorsImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
