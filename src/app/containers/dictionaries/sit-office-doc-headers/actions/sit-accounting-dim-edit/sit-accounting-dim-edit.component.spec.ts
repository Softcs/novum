import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAccountingDimEditComponent } from './sit-accounting-dim-edit.component';

describe('SitAccountingDimEditComponent', () => {
  let component: SitAccountingDimEditComponent;
  let fixture: ComponentFixture<SitAccountingDimEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAccountingDimEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAccountingDimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
