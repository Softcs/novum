import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomersEditComponent } from './sit-customers-edit.component';

describe('SitCustomersEditComponent', () => {
  let component: SitCustomersEditComponent;
  let fixture: ComponentFixture<SitCustomersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitCustomersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
