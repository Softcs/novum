import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDialogDiscardComponent } from './sit-dialog-discard.component';

describe('SitDialogDiscardComponent', () => {
  let component: SitDialogDiscardComponent;
  let fixture: ComponentFixture<SitDialogDiscardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDialogDiscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDialogDiscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
