import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStocksOnDateComponent } from './sit-stocks-on-date.component';

describe('SitStocksOnDateComponent', () => {
  let component: SitStocksOnDateComponent;
  let fixture: ComponentFixture<SitStocksOnDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStocksOnDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStocksOnDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
