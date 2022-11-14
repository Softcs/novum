import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingParamsDefComponent } from './sit-publications-billing-params-def.component';

describe('SitPublicationsBillingParamsDefComponent', () => {
  let component: SitPublicationsBillingParamsDefComponent;
  let fixture: ComponentFixture<SitPublicationsBillingParamsDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingParamsDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingParamsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
