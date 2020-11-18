import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProjectsPubRegisterWorkTimeComponent } from './sit-projects-pub-register-work-time.component';

describe('SitProjectsPubRegisterWorkTimeComponent', () => {
  let component: SitProjectsPubRegisterWorkTimeComponent;
  let fixture: ComponentFixture<SitProjectsPubRegisterWorkTimeComponent>;

  beforeEach(async(() => {
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
