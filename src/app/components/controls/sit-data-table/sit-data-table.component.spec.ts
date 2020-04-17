import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataTableComponent } from './sit-data-table.component';

describe('SitDataTableComponent', () => {
  let component: SitDataTableComponent;
  let fixture: ComponentFixture<SitDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
