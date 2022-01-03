import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDataInputComponent } from './sit-data-input.component';

describe('SitDataInputComponent', () => {
  let component: SitDataInputComponent;
  let fixture: ComponentFixture<SitDataInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
