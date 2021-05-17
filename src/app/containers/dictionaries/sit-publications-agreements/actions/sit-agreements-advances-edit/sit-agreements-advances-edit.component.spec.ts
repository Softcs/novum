import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsAdvancesEditComponent } from './sit-agreements-advances-edit.component';

describe('SitAgreementsAdvancesEditComponent', () => {
  let component: SitAgreementsAdvancesEditComponent;
  let fixture: ComponentFixture<SitAgreementsAdvancesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsAdvancesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsAdvancesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
