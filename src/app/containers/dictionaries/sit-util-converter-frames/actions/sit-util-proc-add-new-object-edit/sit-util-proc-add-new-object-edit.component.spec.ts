import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitUtilProcAddNewObjectEditComponent } from './sit-util-proc-add-new-object-edit.component';

describe('SitUtilProcAddNewObjectEditComponent', () => {
  let component: SitUtilProcAddNewObjectEditComponent;
  let fixture: ComponentFixture<SitUtilProcAddNewObjectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitUtilProcAddNewObjectEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitUtilProcAddNewObjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
