import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLinkInternalComponent } from './sit-link-internal.component';

describe('SitLinkInternalComponent', () => {
  let component: SitLinkInternalComponent;
  let fixture: ComponentFixture<SitLinkInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitLinkInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLinkInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
