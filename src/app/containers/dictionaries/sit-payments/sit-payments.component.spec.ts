import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPaymentsComponent } from './sit-payments.component';

describe('SitPaymentsComponent', () => {
  let component: SitPaymentsComponent;
  let fixture: ComponentFixture<SitPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
