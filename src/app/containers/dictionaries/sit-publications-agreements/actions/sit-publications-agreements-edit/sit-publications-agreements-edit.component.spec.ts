import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsAgreementsEditComponent } from './sit-publications-agreements-edit.component';

describe('SitPublicationsAgreementsEditComponent', () => {
  let component: SitPublicationsAgreementsEditComponent;
  let fixture: ComponentFixture<SitPublicationsAgreementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsAgreementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsAgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
