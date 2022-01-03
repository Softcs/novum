import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitSysDictionariesComponent } from './sit-sys-dictionaries.component';

describe('SitSysDictionariesComponent', () => {
  let component: SitSysDictionariesComponent;
  let fixture: ComponentFixture<SitSysDictionariesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitSysDictionariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSysDictionariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
