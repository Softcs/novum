import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCourierShipmentsComponent } from './sit-courier-shipments.component';

describe('SitCourierShipmentsComponent', () => {
  let component: SitCourierShipmentsComponent;
  let fixture: ComponentFixture<SitCourierShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCourierShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCourierShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
