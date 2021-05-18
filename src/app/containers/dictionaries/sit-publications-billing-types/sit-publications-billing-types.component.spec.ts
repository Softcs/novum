import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingTypesComponent } from './sit-publications-billing-types.component';

describe('SitPublicationsBillingTypesComponent', () => {
  let component: SitPublicationsBillingTypesComponent;
  let fixture: ComponentFixture<SitPublicationsBillingTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
