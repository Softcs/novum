import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitReportsComponent } from './sit-reports.component';

describe('SitReportsComponent', () => {
  let component: SitReportsComponent;
  let fixture: ComponentFixture<SitReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
