import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsProductsEditComponent } from './sit-publications-products-edit.component';

describe('SitPublicationsProductsEditComponent', () => {
  let component: SitPublicationsProductsEditComponent;
  let fixture: ComponentFixture<SitPublicationsProductsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsProductsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsProductsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
