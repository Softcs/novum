import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentMetersReadingsEditComponent } from './sit-flats-rent-meters-readings-edit.component';

describe('SitFlatsRentMetersReadingsEditComponent', () => {
  let component: SitFlatsRentMetersReadingsEditComponent;
  let fixture: ComponentFixture<SitFlatsRentMetersReadingsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentMetersReadingsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentMetersReadingsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
