import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitVacationRequestsComponent } from './sit-vacation-requests.component';

describe('SitVacationRequestsComponent', () => {
  let component: SitVacationRequestsComponent;
  let fixture: ComponentFixture<SitVacationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitVacationRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitVacationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
