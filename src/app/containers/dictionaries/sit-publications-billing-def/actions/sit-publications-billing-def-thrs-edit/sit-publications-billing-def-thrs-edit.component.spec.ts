import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsBillingDefThrsEditComponent } from './sit-publications-billing-def-thrs-edit.component';

describe('SitPublicationsBillingDefThrsEditComponent', () => {
  let component: SitPublicationsBillingDefThrsEditComponent;
  let fixture: ComponentFixture<SitPublicationsBillingDefThrsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsBillingDefThrsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsBillingDefThrsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
