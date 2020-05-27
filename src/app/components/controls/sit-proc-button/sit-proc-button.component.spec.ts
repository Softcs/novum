import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProcButtonComponent } from './sit-proc-button.component';

describe('SitProcButtonComponent', () => {
  let component: SitProcButtonComponent;
  let fixture: ComponentFixture<SitProcButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProcButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
