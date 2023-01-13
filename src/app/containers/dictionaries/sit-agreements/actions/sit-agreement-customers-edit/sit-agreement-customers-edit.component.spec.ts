import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementCustomersEditComponent } from './sit-agreement-customers-edit.component';

describe('SitAgreementCustomersEditComponent', () => {
  let component: SitAgreementCustomersEditComponent;
  let fixture: ComponentFixture<SitAgreementCustomersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementCustomersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementCustomersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
