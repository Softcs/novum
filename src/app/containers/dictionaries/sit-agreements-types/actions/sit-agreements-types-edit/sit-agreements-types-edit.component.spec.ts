import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitAgreementsTypesEditComponent } from './sit-agreements-types-edit.component';

describe('SitAgreementsTypesEditComponent', () => {
  let component: SitAgreementsTypesEditComponent;
  let fixture: ComponentFixture<SitAgreementsTypesEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAgreementsTypesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
