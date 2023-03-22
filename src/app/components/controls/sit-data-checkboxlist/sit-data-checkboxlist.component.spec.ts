import { ComponentFixture, TestBed, waitForAsync  } from '@angular/core/testing';

import { SitDataCheckboxlistComponent } from './sit-data-checkboxlist.component';

describe('SitDataCheckboxlistComponent', () => {
  let component: SitDataCheckboxlistComponent;
  let fixture: ComponentFixture<SitDataCheckboxlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataCheckboxlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataCheckboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
