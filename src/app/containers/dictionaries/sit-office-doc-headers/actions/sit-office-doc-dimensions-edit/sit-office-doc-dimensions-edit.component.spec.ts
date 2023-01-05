import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocDimensionsEditComponent } from './sit-office-doc-dimensions-edit.component';

describe('SitOfficeDocDimensionsEditComponent', () => {
  let component: SitOfficeDocDimensionsEditComponent;
  let fixture: ComponentFixture<SitOfficeDocDimensionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocDimensionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocDimensionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
