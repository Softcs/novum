import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingTypesEditComponent } from './sit-publications-billing-types-edit.component';

describe('SitPublicationsBillingTypesEditComponent', () => {
  let component: SitPublicationsBillingTypesEditComponent;
  let fixture: ComponentFixture<SitPublicationsBillingTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
