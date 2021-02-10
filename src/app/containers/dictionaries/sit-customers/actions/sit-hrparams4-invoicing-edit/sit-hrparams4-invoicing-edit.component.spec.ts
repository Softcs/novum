import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHRParams4InvoicingEditComponent } from './sit-hrparams4-invoicing-edit.component';

describe('SitHRParams4InvoicingEditComponent', () => {
  let component: SitHRParams4InvoicingEditComponent;
  let fixture: ComponentFixture<SitHRParams4InvoicingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHRParams4InvoicingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHRParams4InvoicingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
