import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAbsenceReasonsEditComponent } from './sit-absence-reasons-edit.component';

describe('SitAbsenceReasonsEditComponent', () => {
  let component: SitAbsenceReasonsEditComponent;
  let fixture: ComponentFixture<SitAbsenceReasonsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAbsenceReasonsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAbsenceReasonsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
