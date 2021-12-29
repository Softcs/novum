import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitProductsComponent } from './sit-products.component';

describe('SitProductsComponent', () => {
  let component: SitProductsComponent;
  let fixture: ComponentFixture<SitProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
