import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitContributorAlternativeNamesEditComponent } from './sit-contributor-alternative-names-edit.component';

describe('SitContributorAlternativeNamesEditComponent', () => {
  let component: SitContributorAlternativeNamesEditComponent;
  let fixture: ComponentFixture<SitContributorAlternativeNamesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitContributorAlternativeNamesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitContributorAlternativeNamesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
