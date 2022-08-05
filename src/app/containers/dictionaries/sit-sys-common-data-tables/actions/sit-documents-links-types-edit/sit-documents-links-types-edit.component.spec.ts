import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsLinksTypesEditComponent } from './sit-documents-links-types-edit.component';

describe('SitDocumentsLinksTypesEditComponent', () => {
  let component: SitDocumentsLinksTypesEditComponent;
  let fixture: ComponentFixture<SitDocumentsLinksTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsLinksTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsLinksTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
