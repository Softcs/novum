import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPalletsBalanceDocumentInsComponent } from './sit-pallets-balance-document-ins.component';

describe('SitPalletsBalanceDocumentInsComponent', () => {
  let component: SitPalletsBalanceDocumentInsComponent;
  let fixture: ComponentFixture<SitPalletsBalanceDocumentInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPalletsBalanceDocumentInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPalletsBalanceDocumentInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
