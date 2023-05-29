import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPayrollsEditComponent } from './sit-payrolls-edit.component';

describe('SitPayrollsEditComponent', () => {
  let component: SitPayrollsEditComponent;
  let fixture: ComponentFixture<SitPayrollsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPayrollsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPayrollsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
