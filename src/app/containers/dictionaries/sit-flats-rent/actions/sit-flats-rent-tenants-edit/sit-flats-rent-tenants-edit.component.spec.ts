import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentTenantsEditComponent } from './sit-flats-rent-tenants-edit.component';

describe('SitFlatsRentTenantsEditComponent', () => {
  let component: SitFlatsRentTenantsEditComponent;
  let fixture: ComponentFixture<SitFlatsRentTenantsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentTenantsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentTenantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
