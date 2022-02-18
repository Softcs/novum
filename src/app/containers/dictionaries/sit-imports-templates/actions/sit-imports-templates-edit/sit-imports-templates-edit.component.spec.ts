import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitImportsTemplatesEditComponent } from './sit-imports-templates-edit.component';

describe('SitImportsTemplatesEditComponent', () => {
  let component: SitImportsTemplatesEditComponent;
  let fixture: ComponentFixture<SitImportsTemplatesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitImportsTemplatesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitImportsTemplatesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
