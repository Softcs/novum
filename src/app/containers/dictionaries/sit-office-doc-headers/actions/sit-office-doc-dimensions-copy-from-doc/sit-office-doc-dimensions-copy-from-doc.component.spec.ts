import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitOfficeDocDimensionsCopyFromDocComponent } from './sit-office-doc-dimensions-copy-from-doc.component';

describe('SitOfficeDocDimensionsCopyFromDocComponent', () => {
  let component: SitOfficeDocDimensionsCopyFromDocComponent;
  let fixture: ComponentFixture<SitOfficeDocDimensionsCopyFromDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitOfficeDocDimensionsCopyFromDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitOfficeDocDimensionsCopyFromDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
