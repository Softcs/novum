import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProjectsPubRegisterWorkTimeComponent } from './sit-projects-pub-register-work-time.component';

describe('SitProjectsPubRegisterWorkTimeComponent', () => {
  let component: SitProjectsPubRegisterWorkTimeComponent;
  let fixture: ComponentFixture<SitProjectsPubRegisterWorkTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProjectsPubRegisterWorkTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProjectsPubRegisterWorkTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
