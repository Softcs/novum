import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDataBaseComponent } from './sit-data-base.component';

describe('SitDataBaseComponent', () => {
  let component: SitDataBaseComponent;
  let fixture: ComponentFixture<SitDataBaseComponent>;

  beforeEach(waitForAsync(() => {
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
