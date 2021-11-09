import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProductsEditComponent } from './sit-products-edit.component';

describe('SitProductsEditComponent', () => {
  let component: SitProductsEditComponent;
  let fixture: ComponentFixture<SitProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
