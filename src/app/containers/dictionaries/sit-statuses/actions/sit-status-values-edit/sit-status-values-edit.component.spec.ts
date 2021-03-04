import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStatusValuesEditComponent } from './sit-status-values-edit.component';

describe('SitStatusValuesEditComponent', () => {
  let component: SitStatusValuesEditComponent;
  let fixture: ComponentFixture<SitStatusValuesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStatusValuesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStatusValuesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
