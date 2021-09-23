import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsChangeStatusEditComponent } from './sit-agreements-change-status-edit.component';

describe('SitAgreementsChangeStatusEditComponent', () => {
  let component: SitAgreementsChangeStatusEditComponent;
  let fixture: ComponentFixture<SitAgreementsChangeStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsChangeStatusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsChangeStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
