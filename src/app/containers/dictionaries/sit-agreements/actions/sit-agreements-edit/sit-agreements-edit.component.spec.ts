import { ComponentFixture, TestBed} from '@angular/core/testing';

import { SitAgreementsEditComponent } from './sit-agreements-edit.component';

describe('SitAgreementsEditComponent', () => {
  let component: SitAgreementsEditComponent;
  let fixture: ComponentFixture<SitAgreementsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAgreementsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAgreementsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
