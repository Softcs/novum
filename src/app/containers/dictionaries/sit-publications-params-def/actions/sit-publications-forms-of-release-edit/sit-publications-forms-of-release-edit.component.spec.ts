import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsFormsOfReleaseEditComponent } from './sit-publications-forms-of-release-edit.component';

describe('SitPublicationsFormsOfReleaseEditComponent', () => {
  let component: SitPublicationsFormsOfReleaseEditComponent;
  let fixture: ComponentFixture<SitPublicationsFormsOfReleaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsFormsOfReleaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsFormsOfReleaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
