import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitRightsComponent } from './sit-rights.component';

describe('SitRightsComponent', () => {
  let component: SitRightsComponent;
  let fixture: ComponentFixture<SitRightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
