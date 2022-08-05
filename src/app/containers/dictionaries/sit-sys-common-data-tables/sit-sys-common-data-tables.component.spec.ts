import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitSysCommonDataTablesComponent } from './sit-sys-common-data-tables.component';

describe('SitSysCommonDataTablesComponent', () => {
  let component: SitSysCommonDataTablesComponent;
  let fixture: ComponentFixture<SitSysCommonDataTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitSysCommonDataTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSysCommonDataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
