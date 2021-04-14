import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitHRCompanyHierarchyComponent } from './sit-hrcompany-hierarchy.component';

describe('SitHRCompanyHierarchyComponent', () => {
  let component: SitHRCompanyHierarchyComponent;
  let fixture: ComponentFixture<SitHRCompanyHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitHRCompanyHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitHRCompanyHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
