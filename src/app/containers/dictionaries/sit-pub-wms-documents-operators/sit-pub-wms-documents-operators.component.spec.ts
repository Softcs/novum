import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStocksOnDatesitPubWmsDocumentsOperatorsComponent } from './sit-pub-wms-documents-operators.component';

describe('SitStocksOnDatesitPubWmsDocumentsOperatorsComponent', () => {
  let component: SitStocksOnDatesitPubWmsDocumentsOperatorsComponent;
  let fixture: ComponentFixture<SitStocksOnDatesitPubWmsDocumentsOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStocksOnDatesitPubWmsDocumentsOperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStocksOnDatesitPubWmsDocumentsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
