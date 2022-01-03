import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitLocationsEditComponent } from './sit-locations-edit.component';

describe('SitLocationsEditComponent', () => {
  let component: SitLocationsEditComponent;
  let fixture: ComponentFixture<SitLocationsEditComponent>;

  beforeEach(waitForAsync(() => {
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
