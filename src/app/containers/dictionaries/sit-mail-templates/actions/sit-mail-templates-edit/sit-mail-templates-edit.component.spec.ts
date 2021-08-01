import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitMailTemplatesEditComponent } from './sit-mail-templates-edit.component';

describe('SitMailTemplatesEditComponent', () => {
  let component: SitMailTemplatesEditComponent;
  let fixture: ComponentFixture<SitMailTemplatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitMailTemplatesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMailTemplatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
