import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsFormsOfReleaseComponent } from './sit-publications-forms-of-release.component';

describe('SitPublicationsFormsOfReleaseComponent', () => {
  let component: SitPublicationsFormsOfReleaseComponent;
  let fixture: ComponentFixture<SitPublicationsFormsOfReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsFormsOfReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsFormsOfReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
