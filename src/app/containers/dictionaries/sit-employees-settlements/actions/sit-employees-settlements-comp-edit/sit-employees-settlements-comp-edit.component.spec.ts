import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeesSettlementsCompEditComponent } from './sit-employees-settlements-comp-edit.component';

describe('SitEmployeesSettlementsCompEditComponent', () => {
  let component: SitEmployeesSettlementsCompEditComponent;
  let fixture: ComponentFixture<SitEmployeesSettlementsCompEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeesSettlementsCompEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesSettlementsCompEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
