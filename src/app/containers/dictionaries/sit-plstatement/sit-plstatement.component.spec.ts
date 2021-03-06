import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPLStatementComponent } from './sit-plstatement.component';

describe('SitPLStatementComponent', () => {
  let component: SitPLStatementComponent;
  let fixture: ComponentFixture<SitPLStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPLStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPLStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
