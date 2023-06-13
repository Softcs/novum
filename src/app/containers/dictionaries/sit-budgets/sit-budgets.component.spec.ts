import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitBudgetsComponent } from './sit-budgets.component';

describe('SitBudgetsComponent', () => {
  let component: SitBudgetsComponent;
  let fixture: ComponentFixture<SitBudgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitBudgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitBudgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
