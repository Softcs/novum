import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsTypesReportsEditComponent } from './sit-documents-types-reports-edit.component';

describe('SitDocumentsTypesReportsEditComponent', () => {
  let component: SitDocumentsTypesReportsEditComponent;
  let fixture: ComponentFixture<SitDocumentsTypesReportsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsTypesReportsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsTypesReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
