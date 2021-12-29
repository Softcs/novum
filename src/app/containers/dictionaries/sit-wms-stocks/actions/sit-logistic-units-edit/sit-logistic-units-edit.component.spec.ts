import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitLogisticUnitsEditComponent } from './sit-logistic-units-edit.component';

describe('SitLogisticUnitsEditComponent', () => {
  let component: SitLogisticUnitsEditComponent;
  let fixture: ComponentFixture<SitLogisticUnitsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitLogisticUnitsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLogisticUnitsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
