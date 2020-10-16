import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitJobStepsEditComponent } from './sit-job-steps-edit.component';

describe('SitJobStepsEditComponent', () => {
  let component: SitJobStepsEditComponent;
  let fixture: ComponentFixture<SitJobStepsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitJobStepsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJobStepsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
