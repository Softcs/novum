import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCountriesEditComponent } from './sit-countries-edit.component';

describe('SitCountriesEditComponent', () => {
  let component: SitCountriesEditComponent;
  let fixture: ComponentFixture<SitCountriesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCountriesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCountriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
