import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitVacationRequestsEditComponent } from './sit-vacation-requests-edit.component';

describe('SitVacationRequestsEditComponent', () => {
  let component: SitVacationRequestsEditComponent;
  let fixture: ComponentFixture<SitVacationRequestsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitVacationRequestsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitVacationRequestsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
