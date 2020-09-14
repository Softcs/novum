import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStocksComponent } from './sit-stocks.component';

describe('SitStocksComponent', () => {
  let component: SitStocksComponent;
  let fixture: ComponentFixture<SitStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
