import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLocationsEditComponent } from './sit-locations-edit.component';

describe('SitLocationsEditComponent', () => {
  let component: SitLocationsEditComponent;
  let fixture: ComponentFixture<SitLocationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitLocationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLocationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
