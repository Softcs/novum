import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitImportCustomerFromImpTableComponent } from './sit-import-customer-from-imp-table.component';

describe('SitImportCustomerFromImpTableComponent', () => {
  let component: SitImportCustomerFromImpTableComponent;
  let fixture: ComponentFixture<SitImportCustomerFromImpTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitImportCustomerFromImpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitImportCustomerFromImpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
