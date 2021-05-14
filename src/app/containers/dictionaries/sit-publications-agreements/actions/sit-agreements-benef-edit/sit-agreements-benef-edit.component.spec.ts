import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsBenefEditComponent } from './sit-agreements-benef-edit.component';

describe('SitAgreementsBenefEditComponent', () => {
  let component: SitAgreementsBenefEditComponent;
  let fixture: ComponentFixture<SitAgreementsBenefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsBenefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsBenefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
