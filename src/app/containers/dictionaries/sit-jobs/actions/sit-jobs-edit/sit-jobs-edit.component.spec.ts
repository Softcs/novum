import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitJobsEditComponent } from './sit-jobs-edit.component';

describe('SitJobsEditComponent', () => {
  let component: SitJobsEditComponent;
  let fixture: ComponentFixture<SitJobsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitJobsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJobsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
