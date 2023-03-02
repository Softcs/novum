import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitContributorsComponent } from './sit-contributors.component';

describe('SitContributorsComponent', () => {
  let component: SitContributorsComponent;
  let fixture: ComponentFixture<SitContributorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitContributorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitContributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
