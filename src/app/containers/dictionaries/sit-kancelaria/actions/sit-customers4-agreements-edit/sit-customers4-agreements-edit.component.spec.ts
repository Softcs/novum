import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomers4AgreementsEditComponent } from './sit-customers4-agreements-edit.component';

describe('SitCustomers4AgreementsEditComponent', () => {
  let component: SitCustomers4AgreementsEditComponent;
  let fixture: ComponentFixture<SitCustomers4AgreementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomers4AgreementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomers4AgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
