import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitNavbarComponent } from './sit-navbar.component';

describe('SitNavbarComponent', () => {
  let component: SitNavbarComponent;
  let fixture: ComponentFixture<SitNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
