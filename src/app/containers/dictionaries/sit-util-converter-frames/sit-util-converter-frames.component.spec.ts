import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilConverterFramesComponent } from './sit-util-converter-frames.component';

describe('SitUtilConverterFramesComponent', () => {
  let component: SitUtilConverterFramesComponent;
  let fixture: ComponentFixture<SitUtilConverterFramesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilConverterFramesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilConverterFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
