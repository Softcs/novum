import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitMenuEditComponent } from './sit-menu-edit.component';

describe('SitMenuEditComponent', () => {
  let component: SitMenuEditComponent;
  let fixture: ComponentFixture<SitMenuEditComponent>;

  beforeEach(async(() => {
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
