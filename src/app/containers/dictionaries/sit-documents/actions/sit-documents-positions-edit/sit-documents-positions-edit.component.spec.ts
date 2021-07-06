import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDocumentsPositionsEditComponent } from './sit-documents-positions-edit.component';

describe('SitDocumentsPositionsEditComponent', () => {
  let component: SitDocumentsPositionsEditComponent;
  let fixture: ComponentFixture<SitDocumentsPositionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDocumentsPositionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDocumentsPositionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
