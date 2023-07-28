import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAccountingSchemaAccountingDocTypesEditComponent } from './sit-accounting-schema-accounting-doc-types-edit.component';

describe('SitAccountingSchemaAccountingDocTypesEditComponent', () => {
  let component: SitAccountingSchemaAccountingDocTypesEditComponent;
  let fixture: ComponentFixture<SitAccountingSchemaAccountingDocTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAccountingSchemaAccountingDocTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAccountingSchemaAccountingDocTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
