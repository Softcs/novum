import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomersComponent } from './sit-customers.component';

describe('SitCustomersComponent', () => {
  let component: SitCustomersComponent;
  let fixture: ComponentFixture<SitCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
