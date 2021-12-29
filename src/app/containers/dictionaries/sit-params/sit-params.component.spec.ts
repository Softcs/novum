import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitParamsComponent } from './sit-params.component';

describe('SitParamsComponent', () => {
  let component: SitParamsComponent;
  let fixture: ComponentFixture<SitParamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
