import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCurrenciesEditComponent } from './sit-currencies-edit.component';

describe('SitCurrenciesEditComponent', () => {
  let component: SitCurrenciesEditComponent;
  let fixture: ComponentFixture<SitCurrenciesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCurrenciesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCurrenciesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
