import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProjectsPubComponent } from './sit-projects-pub.component';

describe('SitProjectsPubComponent', () => {
  let component: SitProjectsPubComponent;
  let fixture: ComponentFixture<SitProjectsPubComponent>;

  beforeEach(async(() => {
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
