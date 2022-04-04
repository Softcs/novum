import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentTenancyAgreementsEditComponent } from './sit-flats-rent-tenancy-agreements-edit.component';

describe('SitFlatsRentTenancyAgreementsEditComponent', () => {
  let component: SitFlatsRentTenancyAgreementsEditComponent;
  let fixture: ComponentFixture<SitFlatsRentTenancyAgreementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentTenancyAgreementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentTenancyAgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
