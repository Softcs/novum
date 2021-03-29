import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilSqlObjectsEditComponent } from './sit-util-sql-objects-edit.component';

describe('SitUtilSqlObjectsEditComponent', () => {
  let component: SitUtilSqlObjectsEditComponent;
  let fixture: ComponentFixture<SitUtilSqlObjectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilSqlObjectsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilSqlObjectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
