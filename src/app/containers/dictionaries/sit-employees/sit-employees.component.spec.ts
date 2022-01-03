import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitEmployeesComponent } from './sit-employees.component';

describe('SitEmployeesComponent', () => {
  let component: SitEmployeesComponent;
  let fixture: ComponentFixture<SitEmployeesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
