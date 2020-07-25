import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductsComponent } from './sit-products.component';

describe('SitProductsComponent', () => {
  let component: SitProductsComponent;
  let fixture: ComponentFixture<SitProductsComponent>;

  beforeEach(async(() => {
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
