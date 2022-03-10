import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitChangeStatusComponent } from './sit-change-status.component';

describe('SitChangeStatusComponent', () => {
  let component: SitChangeStatusComponent;
  let fixture: ComponentFixture<SitChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitChangeStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
