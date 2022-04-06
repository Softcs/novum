import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentMetersEditComponent } from './sit-flats-rent-meters-edit.component';

describe('SitFlatsRentMetersEditComponent', () => {
  let component: SitFlatsRentMetersEditComponent;
  let fixture: ComponentFixture<SitFlatsRentMetersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentMetersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentMetersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
