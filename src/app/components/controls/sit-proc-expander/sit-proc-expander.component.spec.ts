import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProcExpanderComponent } from './sit-proc-expander.component';

describe('SitProcExpanderComponent', () => {
  let component: SitProcExpanderComponent;
  let fixture: ComponentFixture<SitProcExpanderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProcExpanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcExpanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
