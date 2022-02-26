import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDialogActionProgressComponent } from './sit-dialog-action-progress.component';

describe('SitDialogActionProgressComponent', () => {
  let component: SitDialogActionProgressComponent;
  let fixture: ComponentFixture<SitDialogActionProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDialogActionProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDialogActionProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
