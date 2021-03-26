import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilSqlObjectsComponent } from './sit-util-sql-objects.component';

describe('SitUtilSqlObjectsComponent', () => {
  let component: SitUtilSqlObjectsComponent;
  let fixture: ComponentFixture<SitUtilSqlObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilSqlObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilSqlObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
