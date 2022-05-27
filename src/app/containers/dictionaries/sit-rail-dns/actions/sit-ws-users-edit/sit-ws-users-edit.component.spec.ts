import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWsUsersEditComponent } from './sit-ws-users-edit.component';

describe('SitWsUsersEditComponent', () => {
  let component: SitWsUsersEditComponent;
  let fixture: ComponentFixture<SitWsUsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWsUsersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWsUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
