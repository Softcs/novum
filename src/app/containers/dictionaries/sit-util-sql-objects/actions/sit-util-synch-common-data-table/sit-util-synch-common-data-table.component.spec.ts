import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilSynchCommonDataTableComponent } from './sit-util-synch-common-data-table.component';

describe('SitUtilSynchCommonDataTableComponent', () => {
  let component: SitUtilSynchCommonDataTableComponent;
  let fixture: ComponentFixture<SitUtilSynchCommonDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilSynchCommonDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilSynchCommonDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
