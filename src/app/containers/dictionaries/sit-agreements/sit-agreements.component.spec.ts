import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsComponent } from './sit-agreements.component';

describe('SitAgreementsComponent', () => {
  let component: SitAgreementsComponent;
  let fixture: ComponentFixture<SitAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
