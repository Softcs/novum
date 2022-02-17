import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitImportFromFileComponent } from './sit-import-from-file.component';

describe('SitImportFromFileComponent', () => {
  let component: SitImportFromFileComponent;
  let fixture: ComponentFixture<SitImportFromFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitImportFromFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitImportFromFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
