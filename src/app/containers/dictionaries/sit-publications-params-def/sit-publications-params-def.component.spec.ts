import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsParamsDefComponent } from './sit-publications-params-def.component';

describe('SitPublicationsParamsDefComponent', () => {
  let component: SitPublicationsParamsDefComponent;
  let fixture: ComponentFixture<SitPublicationsParamsDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsParamsDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsParamsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
