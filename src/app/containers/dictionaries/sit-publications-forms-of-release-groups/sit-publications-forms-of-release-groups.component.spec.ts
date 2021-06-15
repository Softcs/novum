import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsFormsOfReleaseGroupsComponent } from './sit-publications-forms-of-release-groups.component';

describe('SitPublicationsFormsOfReleaseGroupsComponent', () => {
  let component: SitPublicationsFormsOfReleaseGroupsComponent;
  let fixture: ComponentFixture<SitPublicationsFormsOfReleaseGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsFormsOfReleaseGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsFormsOfReleaseGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
