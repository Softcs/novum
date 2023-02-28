import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationContributorsEditComponent } from './sit-publication-contributors-edit.component';

describe('SitPublicationContributorsEditComponent', () => {
  let component: SitPublicationContributorsEditComponent;
  let fixture: ComponentFixture<SitPublicationContributorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationContributorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationContributorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
