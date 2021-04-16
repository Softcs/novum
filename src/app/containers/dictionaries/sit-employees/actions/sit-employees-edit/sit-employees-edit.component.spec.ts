import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeesEditComponent } from './sit-employees-edit.component';

describe('SitEmployeesEditComponent', () => {
  let component: SitEmployeesEditComponent;
  let fixture: ComponentFixture<SitEmployeesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
