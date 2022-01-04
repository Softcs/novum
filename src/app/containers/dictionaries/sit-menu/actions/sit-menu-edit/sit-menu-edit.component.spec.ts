import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitMenuEditComponent } from './sit-menu-edit.component';

describe('SitMenuEditComponent', () => {
  let component: SitMenuEditComponent;
  let fixture: ComponentFixture<SitMenuEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitMenuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMenuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
