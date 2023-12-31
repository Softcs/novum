import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProcExpanderItemBodyComponent } from './sit-proc-expander-item-body.component';

describe('SitProcExpanderItemBodyComponent', () => {
  let component: SitProcExpanderItemBodyComponent;
  let fixture: ComponentFixture<SitProcExpanderItemBodyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProcExpanderItemBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcExpanderItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
