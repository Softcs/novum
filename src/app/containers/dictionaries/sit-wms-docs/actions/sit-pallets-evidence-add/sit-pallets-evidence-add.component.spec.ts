import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPalletsEvidenceAddComponent } from './sit-pallets-evidence-add.component';

describe('SitPalletsEvidenceAddComponent', () => {
  let component: SitPalletsEvidenceAddComponent;
  let fixture: ComponentFixture<SitPalletsEvidenceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPalletsEvidenceAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPalletsEvidenceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
