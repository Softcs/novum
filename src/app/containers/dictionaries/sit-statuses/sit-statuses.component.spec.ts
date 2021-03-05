import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStatusesComponent } from './sit-statuses.component';

describe('SitStatusesComponent', () => {
  let component: SitStatusesComponent;
  let fixture: ComponentFixture<SitStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStatusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
