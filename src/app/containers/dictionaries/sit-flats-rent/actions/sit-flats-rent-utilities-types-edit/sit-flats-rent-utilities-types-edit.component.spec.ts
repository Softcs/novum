import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentUtilitiesTypesEditComponent } from './sit-flats-rent-utilities-types-edit.component';

describe('SitFlatsRentUtilitiesTypesEditComponent', () => {
  let component: SitFlatsRentUtilitiesTypesEditComponent;
  let fixture: ComponentFixture<SitFlatsRentUtilitiesTypesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentUtilitiesTypesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentUtilitiesTypesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
