import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitVacationRequestsChangeSuperiorEditComponent } from './sit-vacation-requests-change-superior-edit.component';

describe('SitVacationRequestsChangeSuperiorEditComponent', () => {
  let component: SitVacationRequestsChangeSuperiorEditComponent;
  let fixture: ComponentFixture<SitVacationRequestsChangeSuperiorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitVacationRequestsChangeSuperiorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitVacationRequestsChangeSuperiorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
