import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitReportsEditComponent } from './sit-reports-edit.component';

describe('SitReportsEditComponent', () => {
  let component: SitReportsEditComponent;
  let fixture: ComponentFixture<SitReportsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitReportsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitReportsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
