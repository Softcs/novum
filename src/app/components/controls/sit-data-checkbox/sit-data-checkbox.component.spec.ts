import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDataCheckboxComponent } from './sit-data-checkbox.component';

describe('SitDataCheckboxComponent', () => {
  let component: SitDataCheckboxComponent;
  let fixture: ComponentFixture<SitDataCheckboxComponent>;

  beforeEach(waitForAsync(() => {
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
