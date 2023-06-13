import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPasswordRecoveryComponent } from './sit-password-recovery.component';

describe('SitPasswordRecoveryComponent', () => {
  let component: SitPasswordRecoveryComponent;
  let fixture: ComponentFixture<SitPasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPasswordRecoveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
