import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitJobsComponent } from './sit-jobs.component';

describe('SitJobsComponent', () => {
  let component: SitJobsComponent;
  let fixture: ComponentFixture<SitJobsComponent>;

  beforeEach(async(() => {
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
