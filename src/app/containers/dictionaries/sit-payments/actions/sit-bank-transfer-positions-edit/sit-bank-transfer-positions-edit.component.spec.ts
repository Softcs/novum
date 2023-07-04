import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitBankTransferPositionsEditComponent } from './sit-bank-transfer-positions-edit.component';

describe('SitBankTransferPositionsEditComponent', () => {
  let component: SitBankTransferPositionsEditComponent;
  let fixture: ComponentFixture<SitBankTransferPositionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitBankTransferPositionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitBankTransferPositionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
