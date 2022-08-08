import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationSubjectsEditComponent } from './sit-publication-subjects-edit.component';

describe('SitPublicationSubjectsEditComponent', () => {
  let component: SitPublicationSubjectsEditComponent;
  let fixture: ComponentFixture<SitPublicationSubjectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationSubjectsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationSubjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
