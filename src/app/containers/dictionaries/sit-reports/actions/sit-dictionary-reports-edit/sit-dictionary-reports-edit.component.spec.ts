import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDictionaryReportsEditComponent } from './sit-dictionary-reports-edit.component';

describe('SitDictionaryReportsEditComponent', () => {
  let component: SitDictionaryReportsEditComponent;
  let fixture: ComponentFixture<SitDictionaryReportsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDictionaryReportsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDictionaryReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
