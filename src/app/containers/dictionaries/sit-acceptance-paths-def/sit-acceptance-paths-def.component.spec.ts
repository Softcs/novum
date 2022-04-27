import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAcceptancePathsDefComponent } from './sit-acceptance-paths-def.component';

describe('SitAcceptancePathsDefComponent', () => {
  let component: SitAcceptancePathsDefComponent;
  let fixture: ComponentFixture<SitAcceptancePathsDefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitAcceptancePathsDefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAcceptancePathsDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
