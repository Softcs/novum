import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAcceptancePathsDefEditComponent } from './sit-acceptance-paths-def-edit.component';

describe('SitAcceptancePathsDefEditComponent', () => {
  let component: SitAcceptancePathsDefEditComponent;
  let fixture: ComponentFixture<SitAcceptancePathsDefEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAcceptancePathsDefEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAcceptancePathsDefEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
