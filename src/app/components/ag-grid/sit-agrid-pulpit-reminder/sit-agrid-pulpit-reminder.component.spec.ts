import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgridPulpitReminderComponent } from './sit-agrid-pulpit-reminder.component';

describe('SitAgridPulpitReminderComponent', () => {
  let component: SitAgridPulpitReminderComponent;
  let fixture: ComponentFixture<SitAgridPulpitReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgridPulpitReminderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgridPulpitReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
