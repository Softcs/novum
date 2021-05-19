import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailDnsComponent } from './sit-rail-dns.component';

describe('SitRailDnsComponent', () => {
  let component: SitRailDnsComponent;
  let fixture: ComponentFixture<SitRailDnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailDnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailDnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
