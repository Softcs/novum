import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationAudienceEditComponent } from './sit-publication-audience-edit.component';

describe('SitPublicationAudienceEditComponent', () => {
  let component: SitPublicationAudienceEditComponent;
  let fixture: ComponentFixture<SitPublicationAudienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationAudienceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationAudienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
