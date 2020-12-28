import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAgreementsTypesComponent } from './sit-agreements-types.component';

describe('SitAgreementsTypesComponent', () => {
  let component: SitAgreementsTypesComponent;
  let fixture: ComponentFixture<SitAgreementsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAgreementsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
