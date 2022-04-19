import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHrPfronDataImportComponent } from './sit-hr-pfron-data-import.component';

describe('SitHrPfronDataImportComponent', () => {
  let component: SitHrPfronDataImportComponent;
  let fixture: ComponentFixture<SitHrPfronDataImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHrPfronDataImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHrPfronDataImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
