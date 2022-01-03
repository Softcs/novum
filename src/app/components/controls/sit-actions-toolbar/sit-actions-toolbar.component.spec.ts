import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitActionsToolbarComponent } from './sit-actions-toolbar.component';

describe('SitActionsToolbarComponent', () => {
  let component: SitActionsToolbarComponent;
  let fixture: ComponentFixture<SitActionsToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitActionsToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitActionsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
