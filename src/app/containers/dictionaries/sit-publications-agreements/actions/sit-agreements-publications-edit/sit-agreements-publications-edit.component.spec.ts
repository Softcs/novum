import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsPublicationsEditComponent } from './sit-agreements-publications-edit.component';

describe('SitAgreementsPublicationsEditComponent', () => {
  let component: SitAgreementsPublicationsEditComponent;
  let fixture: ComponentFixture<SitAgreementsPublicationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsPublicationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsPublicationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
