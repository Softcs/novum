import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductsUpdateWeightComponent } from './sit-products-update-weight.component';

describe('SitProductsUpdateWeightComponent', () => {
  let component: SitProductsUpdateWeightComponent;
  let fixture: ComponentFixture<SitProductsUpdateWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProductsUpdateWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductsUpdateWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
