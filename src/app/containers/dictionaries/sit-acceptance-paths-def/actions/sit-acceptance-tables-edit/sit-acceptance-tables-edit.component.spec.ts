import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAcceptanceTablesEditComponent } from './sit-acceptance-tables-edit.component';

describe('SitAcceptanceTablesEditComponent', () => {
  let component: SitAcceptanceTablesEditComponent;
  let fixture: ComponentFixture<SitAcceptanceTablesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAcceptanceTablesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAcceptanceTablesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
