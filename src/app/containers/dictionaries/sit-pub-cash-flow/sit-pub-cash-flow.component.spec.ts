import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPubCashFlowComponent } from './sit-pub-cash-flow.component';

describe('SitPubCashFlowComponent', () => {
  let component: SitPubCashFlowComponent;
  let fixture: ComponentFixture<SitPubCashFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPubCashFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPubCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
