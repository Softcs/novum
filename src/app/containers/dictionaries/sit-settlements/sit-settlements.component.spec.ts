import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitSettlementsComponent } from './sit-settlements.component';

describe('SitSettlementsComponent', () => {
  let component: SitSettlementsComponent;
  let fixture: ComponentFixture<SitSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitSettlementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
