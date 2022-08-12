import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitWmsParamsDefComponent } from './sit-wms-params-def.component';

describe('SitWmsParamsDefComponent', () => {
  let component: SitWmsParamsDefComponent;
  let fixture: ComponentFixture<SitWmsParamsDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitWmsParamsDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWmsParamsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
