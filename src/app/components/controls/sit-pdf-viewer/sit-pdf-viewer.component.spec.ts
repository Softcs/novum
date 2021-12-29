import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitPdfViewerComponent } from './sit-pdf-viewer.component';

describe('SitPdfViewerComponent', () => {
  let component: SitPdfViewerComponent;
  let fixture: ComponentFixture<SitPdfViewerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitPdfViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPdfViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
