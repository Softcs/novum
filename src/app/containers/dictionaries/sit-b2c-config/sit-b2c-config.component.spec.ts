import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cConfigComponent } from './sit-b2c-config.component';

describe('SitB2cConfigComponent', () => {
  let component: SitB2cConfigComponent;
  let fixture: ComponentFixture<SitB2cConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
