import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitBankStatementPositionsComponent } from './sit-bank-statement-positions.component';

describe('SitBankStatementPositionsComponent', () => {
  let component: SitBankStatementPositionsComponent;
  let fixture: ComponentFixture<SitBankStatementPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitBankStatementPositionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitBankStatementPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
