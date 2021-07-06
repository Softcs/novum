import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsHeadersEditComponent } from './sit-documents-headers-edit.component';

describe('SitDocumentsHeadersEditComponent', () => {
  let component: SitDocumentsHeadersEditComponent;
  let fixture: ComponentFixture<SitDocumentsHeadersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsHeadersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsHeadersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
