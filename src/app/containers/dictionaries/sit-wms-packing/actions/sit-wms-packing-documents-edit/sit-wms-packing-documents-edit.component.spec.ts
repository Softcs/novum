import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsPackingDocumentsEditComponent } from './sit-wms-packing-documents-edit.component';

describe('SitWmsPackingDocumentsEditComponent', () => {
  let component: SitWmsPackingDocumentsEditComponent;
  let fixture: ComponentFixture<SitWmsPackingDocumentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsPackingDocumentsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsPackingDocumentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
