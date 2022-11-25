import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cPublicationFormsOfReleaseEditComponent } from './sit-b2c-publication-forms-of-release-edit.component';

describe('SitB2cPublicationFormsOfReleaseEditComponent', () => {
  let component: SitB2cPublicationFormsOfReleaseEditComponent;
  let fixture: ComponentFixture<SitB2cPublicationFormsOfReleaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cPublicationFormsOfReleaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cPublicationFormsOfReleaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
