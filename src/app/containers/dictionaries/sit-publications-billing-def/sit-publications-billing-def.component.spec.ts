import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingDefComponent } from './sit-publications-billing-def.component';

describe('SitPublicationsBillingDefComponent', () => {
  let component: SitPublicationsBillingDefComponent;
  let fixture: ComponentFixture<SitPublicationsBillingDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
