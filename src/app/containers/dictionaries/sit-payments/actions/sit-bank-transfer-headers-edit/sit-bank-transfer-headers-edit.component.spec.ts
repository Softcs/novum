import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitBankTransferHeadersEditComponent } from './sit-bank-transfer-headers-edit.component';

describe('SitBankTransferHeadersEditComponent', () => {
  let component: SitBankTransferHeadersEditComponent;
  let fixture: ComponentFixture<SitBankTransferHeadersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitBankTransferHeadersEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitBankTransferHeadersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
