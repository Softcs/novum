import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataCheckboxComponent } from './sit-data-checkbox.component';

describe('SitDataCheckboxComponent', () => {
  let component: SitDataCheckboxComponent;
  let fixture: ComponentFixture<SitDataCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
