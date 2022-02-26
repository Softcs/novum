import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomerEDocsEditComponent } from './sit-customer-edocs-edit.component';

describe('SitCustomerEDocsEditComponent', () => {
  let component: SitCustomerEDocsEditComponent;
  let fixture: ComponentFixture<SitCustomerEDocsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomerEDocsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomerEDocsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
