import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomersAttachments4EmpSettDefEditComponent } from './sit-customers-attachments4-emp-sett-def-edit.component';

describe('SitCustomersAttachments4EmpSettDefEditComponent', () => {
  let component: SitCustomersAttachments4EmpSettDefEditComponent;
  let fixture: ComponentFixture<SitCustomersAttachments4EmpSettDefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomersAttachments4EmpSettDefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomersAttachments4EmpSettDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
