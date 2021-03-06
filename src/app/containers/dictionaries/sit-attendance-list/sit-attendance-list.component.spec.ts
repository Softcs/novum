import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAttendanceListComponent } from './sit-attendance-list.component';

describe('SitAttendanceListComponent', () => {
  let component: SitAttendanceListComponent;
  let fixture: ComponentFixture<SitAttendanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAttendanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAttendanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
