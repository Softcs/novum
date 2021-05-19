import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingDefEditComponent } from './sit-publications-billing-def-edit.component';

describe('SitPublicationsBillingDefEditComponent', () => {
  let component: SitPublicationsBillingDefEditComponent;
  let fixture: ComponentFixture<SitPublicationsBillingDefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingDefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
