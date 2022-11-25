import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cPublicationAudienceEditComponent } from './sit-b2c-publication-audience-edit.component';

describe('SitB2cPublicationAudienceEditComponent', () => {
  let component: SitB2cPublicationAudienceEditComponent;
  let fixture: ComponentFixture<SitB2cPublicationAudienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cPublicationAudienceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cPublicationAudienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
