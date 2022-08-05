import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitJobTimesEditComponent } from './sit-job-times-edit.component';

describe('SitJobTimesEditComponent', () => {
  let component: SitJobTimesEditComponent;
  let fixture: ComponentFixture<SitJobTimesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitJobTimesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJobTimesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
