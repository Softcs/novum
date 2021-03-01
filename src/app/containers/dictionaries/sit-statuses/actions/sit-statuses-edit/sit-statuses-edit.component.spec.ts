import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStatusesEditComponent } from './sit-statuses-edit.component';

describe('SitStatusesEditComponent', () => {
  let component: SitStatusesEditComponent;
  let fixture: ComponentFixture<SitStatusesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStatusesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStatusesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
