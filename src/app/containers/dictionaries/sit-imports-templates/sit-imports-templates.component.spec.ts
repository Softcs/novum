import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitImportsTemplatesComponent } from './sit-imports-templates.component';

describe('SitImportsTemplatesComponent', () => {
  let component: SitImportsTemplatesComponent;
  let fixture: ComponentFixture<SitImportsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitImportsTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitImportsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
