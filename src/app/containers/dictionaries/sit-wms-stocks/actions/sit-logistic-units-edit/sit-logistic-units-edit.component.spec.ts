import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLogisticUnitsEditComponent } from './sit-logistic-units-edit.component';

describe('SitLogisticUnitsEditComponent', () => {
  let component: SitLogisticUnitsEditComponent;
  let fixture: ComponentFixture<SitLogisticUnitsEditComponent>;

  beforeEach(async(() => {
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
