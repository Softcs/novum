import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsTypesComponent } from './sit-documents-types.component';

describe('SitDocumentsTypesComponent', () => {
  let component: SitDocumentsTypesComponent;
  let fixture: ComponentFixture<SitDocumentsTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
