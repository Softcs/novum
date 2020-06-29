import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailConfigurationsEditComponent } from './sit-rail-configurations-edit.component';

describe('SitRailConfigurationsEditComponent', () => {
  let component: SitRailConfigurationsEditComponent;
  let fixture: ComponentFixture<SitRailConfigurationsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitRailConfigurationsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailConfigurationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
