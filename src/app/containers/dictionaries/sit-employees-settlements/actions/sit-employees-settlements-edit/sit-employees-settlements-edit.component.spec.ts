import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeesSettlementsEditComponent } from './sit-employees-settlements-edit.component';

describe('SitEmployeesSettlementsEditComponent', () => {
  let component: SitEmployeesSettlementsEditComponent;
  let fixture: ComponentFixture<SitEmployeesSettlementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeesSettlementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesSettlementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
