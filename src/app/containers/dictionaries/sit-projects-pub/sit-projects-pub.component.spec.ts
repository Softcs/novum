import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProjectsPubComponent } from './sit-projects-pub.component';

describe('SitProjectsPubComponent', () => {
  let component: SitProjectsPubComponent;
  let fixture: ComponentFixture<SitProjectsPubComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProjectsPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProjectsPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
