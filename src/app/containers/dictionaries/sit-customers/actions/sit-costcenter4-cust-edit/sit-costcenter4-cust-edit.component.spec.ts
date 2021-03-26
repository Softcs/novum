import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCostcenter4CustEditComponent } from './sit-costcenter4-cust-edit.component';

describe('SitCostcenter4CustEditComponent', () => {
  let component: SitCostcenter4CustEditComponent;
  let fixture: ComponentFixture<SitCostcenter4CustEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCostcenter4CustEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCostcenter4CustEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
