import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsChangeStatusEditComponent } from './sit-publications-change-status-edit.component';

describe('SitPublicationsChangeStatusEditComponent', () => {
  let component: SitPublicationsChangeStatusEditComponent;
  let fixture: ComponentFixture<SitPublicationsChangeStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsChangeStatusEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsChangeStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
