import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocPositionsEditComponent } from './sit-office-doc-positions-edit.component';

describe('SitOfficeDocPositionsEditComponent', () => {
  let component: SitOfficeDocPositionsEditComponent;
  let fixture: ComponentFixture<SitOfficeDocPositionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocPositionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocPositionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
