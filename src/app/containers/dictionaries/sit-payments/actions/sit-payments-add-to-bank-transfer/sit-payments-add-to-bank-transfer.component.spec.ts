import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPaymentsAddToBankTransferComponent } from './sit-payments-add-to-bank-transfer.component';

describe('SitPaymentsAddToBankTransferComponent', () => {
  let component: SitPaymentsAddToBankTransferComponent;
  let fixture: ComponentFixture<SitPaymentsAddToBankTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPaymentsAddToBankTransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPaymentsAddToBankTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
