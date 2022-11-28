import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2sPublicationSubjectsEditComponent } from './sit-b2c-publication-subjects-edit.component';

describe('SitB2sPublicationSubjectsEditComponent', () => {
  let component: SitB2sPublicationSubjectsEditComponent;
  let fixture: ComponentFixture<SitB2sPublicationSubjectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2sPublicationSubjectsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2sPublicationSubjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
