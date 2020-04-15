import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataBaseComponent } from './sit-data-base.component';

describe('SitDataBaseComponent', () => {
  let component: SitDataBaseComponent;
  let fixture: ComponentFixture<SitDataBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
