import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsAgreementsComponent } from './sit-publications-agreements.component';

describe('SitPublicationsAgreementsComponent', () => {
  let component: SitPublicationsAgreementsComponent;
  let fixture: ComponentFixture<SitPublicationsAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
