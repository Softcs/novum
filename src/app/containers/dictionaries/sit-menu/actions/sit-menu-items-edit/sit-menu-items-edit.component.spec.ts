import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitMenuItemsEditComponent } from './sit-menu-items-edit.component';

describe('SitMenuItemsEditComponent', () => {
  let component: SitMenuItemsEditComponent;
  let fixture: ComponentFixture<SitMenuItemsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitMenuItemsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMenuItemsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
