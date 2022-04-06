import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentUtilitiesEditComponent } from './sit-flats-rent-utilities-edit.component';

describe('SitFlatsRentUtilitiesEditComponent', () => {
  let component: SitFlatsRentUtilitiesEditComponent;
  let fixture: ComponentFixture<SitFlatsRentUtilitiesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentUtilitiesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentUtilitiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
