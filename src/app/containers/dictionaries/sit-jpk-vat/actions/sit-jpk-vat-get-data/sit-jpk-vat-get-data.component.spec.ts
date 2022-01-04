import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitJpkVatGetDataComponent } from './sit-jpk-vat-get-data.component';

describe('SitJpkVatGetDataComponent', () => {
  let component: SitJpkVatGetDataComponent;
  let fixture: ComponentFixture<SitJpkVatGetDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitJpkVatGetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJpkVatGetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
