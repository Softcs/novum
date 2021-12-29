import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitFilesButtonComponent } from './sit-files-button.component';

describe('SitFilesButtonComponent', () => {
  let component: SitFilesButtonComponent;
  let fixture: ComponentFixture<SitFilesButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitFilesButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFilesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
