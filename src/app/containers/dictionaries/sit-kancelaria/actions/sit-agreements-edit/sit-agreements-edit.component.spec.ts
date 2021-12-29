import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitAgreementsEditComponent } from './sit-agreements-edit.component';

describe('SitAgreementsEditComponent', () => {
  let component: SitAgreementsEditComponent;
  let fixture: ComponentFixture<SitAgreementsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAgreementsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
