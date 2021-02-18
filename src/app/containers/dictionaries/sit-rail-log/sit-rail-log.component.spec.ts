import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRailLogComponent } from './sit-rail-log.component';

describe('SitRailLogComponent', () => {
  let component: SitRailLogComponent;
  let fixture: ComponentFixture<SitRailLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRailLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRailLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
