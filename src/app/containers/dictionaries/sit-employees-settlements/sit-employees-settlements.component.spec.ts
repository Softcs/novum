import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeesSettlementsComponent } from './sit-employees-settlements.component';

describe('SitEmployeesSettlementsComponent', () => {
  let component: SitEmployeesSettlementsComponent;
  let fixture: ComponentFixture<SitEmployeesSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeesSettlementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeesSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
