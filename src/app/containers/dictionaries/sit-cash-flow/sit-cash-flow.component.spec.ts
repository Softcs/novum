import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCashFlowComponent } from './sit-cash-flow.component';

describe('SitCashFlowComponent', () => {
  let component: SitCashFlowComponent;
  let fixture: ComponentFixture<SitCashFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCashFlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
