import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitVacationRequestsCancelEditComponent } from './sit-vacation-requests-cancel-edit.component';

describe('SitVacationRequestsCancelEditComponent', () => {
  let component: SitVacationRequestsCancelEditComponent;
  let fixture: ComponentFixture<SitVacationRequestsCancelEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitVacationRequestsCancelEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitVacationRequestsCancelEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
