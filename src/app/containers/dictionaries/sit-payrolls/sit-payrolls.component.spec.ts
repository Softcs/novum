import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitPayrollsComponent } from './sit-payrolls.component';

describe('SitPayrollsComponent', () => {
  let component: SitPayrollsComponent;
  let fixture: ComponentFixture<SitPayrollsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitPayrollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
