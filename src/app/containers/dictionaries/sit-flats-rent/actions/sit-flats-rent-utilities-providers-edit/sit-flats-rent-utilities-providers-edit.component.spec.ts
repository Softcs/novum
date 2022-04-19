import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentUtilitiesProvidersEditComponent } from './sit-flats-rent-utilities-providers-edit.component';

describe('SitFlatsRentUtilitiesProvidersEditComponent', () => {
  let component: SitFlatsRentUtilitiesProvidersEditComponent;
  let fixture: ComponentFixture<SitFlatsRentUtilitiesProvidersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentUtilitiesProvidersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentUtilitiesProvidersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
