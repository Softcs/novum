import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitRightsGroupsEditComponent } from './sit-rights-groups-edit.component';

describe('SitRightsGroupsEditComponent', () => {
  let component: SitRightsGroupsEditComponent;
  let fixture: ComponentFixture<SitRightsGroupsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitRightsGroupsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRightsGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
