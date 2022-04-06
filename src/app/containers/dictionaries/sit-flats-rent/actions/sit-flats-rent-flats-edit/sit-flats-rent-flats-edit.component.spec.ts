import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentFlatsEditComponent } from './sit-flats-rent-flats-edit.component';

describe('SitFlatsRentFlatsEditComponent', () => {
  let component: SitFlatsRentFlatsEditComponent;
  let fixture: ComponentFixture<SitFlatsRentFlatsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentFlatsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentFlatsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
