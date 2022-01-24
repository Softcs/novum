import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDialogConfirmDelComponent } from './sit-dialog-confirm-selected-rows.component';

describe('SitDialogConfirmSelectedRowsComponent', () => {
  let component: SitDialogConfirmDelComponent;
  let fixture: ComponentFixture<SitDialogConfirmDelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDialogConfirmDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDialogConfirmDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
