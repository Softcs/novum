import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitBankTransferHeadersGenFileComponent } from './sit-bank-transfer-headers-gen-file.component';

describe('SitBankTransferHeadersGenFileComponent', () => {
  let component: SitBankTransferHeadersGenFileComponent;
  let fixture: ComponentFixture<SitBankTransferHeadersGenFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitBankTransferHeadersGenFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitBankTransferHeadersGenFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
