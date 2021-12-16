import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHRBatches4InvoicingComponent } from './sit-hrbatches4-invoicing.component';

describe('SitHRBatches4InvoicingComponent', () => {
  let component: SitHRBatches4InvoicingComponent;
  let fixture: ComponentFixture<SitHRBatches4InvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHRBatches4InvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHRBatches4InvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
