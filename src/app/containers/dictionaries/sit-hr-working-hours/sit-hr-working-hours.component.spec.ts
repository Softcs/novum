import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHrWorkingHoursComponent } from './sit-hr-working-hours.component';

describe('SitHrWorkingHoursComponent', () => {
  let component: SitHrWorkingHoursComponent;
  let fixture: ComponentFixture<SitHrWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHrWorkingHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHrWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
