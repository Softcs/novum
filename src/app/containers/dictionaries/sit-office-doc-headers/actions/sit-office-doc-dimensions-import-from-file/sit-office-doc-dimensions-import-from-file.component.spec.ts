import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocDimensionsImportFromFileComponent } from './sit-office-doc-dimensions-import-from-file.component';

describe('SitOfficeDocDimensionsImportFromFileComponent', () => {
  let component: SitOfficeDocDimensionsImportFromFileComponent;
  let fixture: ComponentFixture<SitOfficeDocDimensionsImportFromFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocDimensionsImportFromFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocDimensionsImportFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
