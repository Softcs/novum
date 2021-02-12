import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataLabelComponent } from './sit-data-label.component';

describe('SitDataLabelComponent', () => {
  let component: SitDataLabelComponent;
  let fixture: ComponentFixture<SitDataLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDataLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
