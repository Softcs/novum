import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitLocationsComponent } from './sit-locations.component';

describe('SitLocationsComponent', () => {
  let component: SitLocationsComponent;
  let fixture: ComponentFixture<SitLocationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
