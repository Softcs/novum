import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductSetIsB2cComponent } from './sit-product-set-is-b2c.component';

describe('SitProductSetIsB2cComponent', () => {
  let component: SitProductSetIsB2cComponent;
  let fixture: ComponentFixture<SitProductSetIsB2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProductSetIsB2cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductSetIsB2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
