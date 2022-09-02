import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHRParamsDefComponent } from './sit-hr-params-def.component';

describe('SitHRParamsDefComponent', () => {
  let component: SitHRParamsDefComponent;
  let fixture: ComponentFixture<SitHRParamsDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHRParamsDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHRParamsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
