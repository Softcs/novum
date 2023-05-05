import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomersDocumentsImportsEditComponent } from './sit-customers-documents-imports-edit.component';

describe('SitCustomersDocumentsImportsEditComponent', () => {
  let component: SitCustomersDocumentsImportsEditComponent;
  let fixture: ComponentFixture<SitCustomersDocumentsImportsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomersDocumentsImportsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomersDocumentsImportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
