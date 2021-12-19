import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilProcConvertUpdateFrameBodyComponent } from './sit-util-proc-convert-update-frame-body.component';

describe('SitUtilProcConvertUpdateFrameBodyComponent', () => {
  let component: SitUtilProcConvertUpdateFrameBodyComponent;
  let fixture: ComponentFixture<SitUtilProcConvertUpdateFrameBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilProcConvertUpdateFrameBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilProcConvertUpdateFrameBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
