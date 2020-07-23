import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsComponent } from './sit-documents.component';

describe('SitDocumentsComponent', () => {
  let component: SitDocumentsComponent;
  let fixture: ComponentFixture<SitDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
