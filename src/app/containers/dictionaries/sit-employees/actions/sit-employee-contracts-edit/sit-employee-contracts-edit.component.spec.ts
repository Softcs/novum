import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitEmployeeContractsEditComponent } from './sit-employee-contracts-edit.component';

describe('SitEmployeeContractsEditComponent', () => {
  let component: SitEmployeeContractsEditComponent;
  let fixture: ComponentFixture<SitEmployeeContractsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitEmployeeContractsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitEmployeeContractsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
