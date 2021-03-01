import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCourierCreateShipmentsComponent } from './sit-courier-create-shipments.component';

describe('SitCourierCreateShipmentsComponent', () => {
  let component: SitCourierCreateShipmentsComponent;
  let fixture: ComponentFixture<SitCourierCreateShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCourierCreateShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCourierCreateShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
