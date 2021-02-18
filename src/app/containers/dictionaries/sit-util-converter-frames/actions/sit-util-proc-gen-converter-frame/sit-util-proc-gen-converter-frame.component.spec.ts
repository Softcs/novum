import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilProcGenConverterFrameComponent } from './sit-util-proc-gen-converter-frame.component';

describe('SitUtilProcGenConverterFrameComponent', () => {
  let component: SitUtilProcGenConverterFrameComponent;
  let fixture: ComponentFixture<SitUtilProcGenConverterFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilProcGenConverterFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilProcGenConverterFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
