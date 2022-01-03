import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitParamsEditComponent } from './sit-params-edit.component';

describe('SitParamsEditComponent', () => {
  let component: SitParamsEditComponent;
  let fixture: ComponentFixture<SitParamsEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitParamsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitParamsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
