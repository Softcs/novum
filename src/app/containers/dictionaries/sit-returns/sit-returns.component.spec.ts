import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitReturnsComponent } from './sit-returns.component';

describe('SitReturnsComponent', () => {
  let component: SitReturnsComponent;
  let fixture: ComponentFixture<SitReturnsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
