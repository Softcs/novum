import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsTypesEditComponent } from './sit-documents-types-edit.component';

describe('SitDocumentsTypesEditComponent', () => {
  let component: SitDocumentsTypesEditComponent;
  let fixture: ComponentFixture<SitDocumentsTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
