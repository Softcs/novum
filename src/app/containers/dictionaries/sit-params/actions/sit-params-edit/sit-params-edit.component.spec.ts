import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitParamsEditComponent } from './sit-params-edit.component';

describe('SitParamsEditComponent', () => {
  let component: SitParamsEditComponent;
  let fixture: ComponentFixture<SitParamsEditComponent>;

  beforeEach(async(() => {
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
