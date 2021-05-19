import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailDnsEditComponent } from './sit-rail-dns-edit.component';

describe('SitRailDnsEditComponent', () => {
  let component: SitRailDnsEditComponent;
  let fixture: ComponentFixture<SitRailDnsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailDnsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailDnsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
