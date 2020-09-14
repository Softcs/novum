import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStocksImportComponent } from './sit-stocks-import.component';

describe('SitStocksImportComponent', () => {
  let component: SitStocksImportComponent;
  let fixture: ComponentFixture<SitStocksImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitStocksImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStocksImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
