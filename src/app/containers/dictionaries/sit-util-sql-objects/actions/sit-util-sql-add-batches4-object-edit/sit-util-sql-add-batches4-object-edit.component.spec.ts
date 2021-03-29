import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilSqlAddBatches4ObjectEditComponent } from './sit-util-sql-add-batches4-object-edit.component';

describe('SitUtilSqlAddBatches4ObjectEditComponent', () => {
  let component: SitUtilSqlAddBatches4ObjectEditComponent;
  let fixture: ComponentFixture<SitUtilSqlAddBatches4ObjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilSqlAddBatches4ObjectEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilSqlAddBatches4ObjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
