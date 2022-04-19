import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentRentPositionsEditComponent } from './sit-flats-rent-rent-positions-edit.component';

describe('SitFlatsRentRentPositionsEditComponent', () => {
  let component: SitFlatsRentRentPositionsEditComponent;
  let fixture: ComponentFixture<SitFlatsRentRentPositionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentRentPositionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentRentPositionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
