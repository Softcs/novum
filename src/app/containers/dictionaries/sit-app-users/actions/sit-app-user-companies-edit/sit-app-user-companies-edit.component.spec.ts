import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitAppUserCompaniesEditComponent } from './sit-app-user-companies-edit.component';

describe('SitAppUserCompaniesEditComponent', () => {
  let component: SitAppUserCompaniesEditComponent;
  let fixture: ComponentFixture<SitAppUserCompaniesEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAppUserCompaniesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAppUserCompaniesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
