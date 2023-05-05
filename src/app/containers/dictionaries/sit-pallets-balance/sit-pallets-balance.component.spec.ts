import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPalletsBalanceComponent } from './sit-pallets-balance.component';

describe('SitPalletsBalanceComponent', () => {
  let component: SitPalletsBalanceComponent;
  let fixture: ComponentFixture<SitPalletsBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPalletsBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPalletsBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
