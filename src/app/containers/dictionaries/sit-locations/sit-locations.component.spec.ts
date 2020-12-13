import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLocationsComponent } from './sit-locations.component';

describe('SitLocationsComponent', () => {
  let component: SitLocationsComponent;
  let fixture: ComponentFixture<SitLocationsComponent>;

  beforeEach(async(() => {
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
