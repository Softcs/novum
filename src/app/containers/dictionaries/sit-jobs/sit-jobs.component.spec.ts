import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitJobsComponent } from './sit-jobs.component';

describe('SitJobsComponent', () => {
  let component: SitJobsComponent;
  let fixture: ComponentFixture<SitJobsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
