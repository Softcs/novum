import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAcceptanceStepsDefEditComponent } from './sit-acceptance-steps-def-edit.component';

describe('SitAcceptanceStepsDefEditComponent', () => {
  let component: SitAcceptanceStepsDefEditComponent;
  let fixture: ComponentFixture<SitAcceptanceStepsDefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAcceptanceStepsDefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAcceptanceStepsDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
