import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDocumentsComponent } from './sit-documents.component';

describe('SitDocumentsComponent', () => {
  let component: SitDocumentsComponent;
  let fixture: ComponentFixture<SitDocumentsComponent>;

  beforeEach(waitForAsync(() => {
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
