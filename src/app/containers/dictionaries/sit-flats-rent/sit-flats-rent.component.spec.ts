import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitFlatsRentComponent } from './sit-flats-rent.component';

describe('SitFlatsRentComponent', () => {
  let component: SitFlatsRentComponent;
  let fixture: ComponentFixture<SitFlatsRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitFlatsRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitFlatsRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
