import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRefreshButtonComponent } from './sit-refresh-button.component';

describe('SitRefreshButtonComponent', () => {
  let component: SitRefreshButtonComponent;
  let fixture: ComponentFixture<SitRefreshButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitRefreshButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRefreshButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
