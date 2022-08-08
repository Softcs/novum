import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsFormsOfReleaseGroupsEditComponent } from './sit-publications-forms-of-release-groups-edit.component';

describe('SitPublicationsFormsOfReleaseGroupsEditComponent', () => {
  let component: SitPublicationsFormsOfReleaseGroupsEditComponent;
  let fixture: ComponentFixture<SitPublicationsFormsOfReleaseGroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsFormsOfReleaseGroupsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsFormsOfReleaseGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
