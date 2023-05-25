import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgridLinkComponent } from './sit-agrid-link.component';

describe('SitAgridLinkComponent', () => {
  let component: SitAgridLinkComponent;
  let fixture: ComponentFixture<SitAgridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
