import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAppUserCompaniesEditComponent } from './sit-app-user-companies-edit.component';

describe('SitAppUserCompaniesEditComponent', () => {
  let component: SitAppUserCompaniesEditComponent;
  let fixture: ComponentFixture<SitAppUserCompaniesEditComponent>;

  beforeEach(async(() => {
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
