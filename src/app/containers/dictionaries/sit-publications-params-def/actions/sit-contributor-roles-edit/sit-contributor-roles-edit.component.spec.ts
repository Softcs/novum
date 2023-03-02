import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitContributorRolesEditComponent } from './sit-contributor-roles-edit.component';

describe('SitContributorRolesEditComponent', () => {
  let component: SitContributorRolesEditComponent;
  let fixture: ComponentFixture<SitContributorRolesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitContributorRolesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitContributorRolesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
