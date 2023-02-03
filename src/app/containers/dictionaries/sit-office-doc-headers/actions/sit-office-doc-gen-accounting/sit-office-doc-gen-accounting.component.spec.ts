import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocGenAccountingComponent } from './sit-office-doc-gen-accounting.component';

describe('SitOfficeDocGenAccountingComponent', () => {
  let component: SitOfficeDocGenAccountingComponent;
  let fixture: ComponentFixture<SitOfficeDocGenAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocGenAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocGenAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
