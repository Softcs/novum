import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAcceptanceStepPersonsDefEditComponent } from './sit-acceptance-step-persons-def-edit.component';

describe('SitAcceptanceStepPersonsDefEditComponent', () => {
  let component: SitAcceptanceStepPersonsDefEditComponent;
  let fixture: ComponentFixture<SitAcceptanceStepPersonsDefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAcceptanceStepPersonsDefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAcceptanceStepPersonsDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
