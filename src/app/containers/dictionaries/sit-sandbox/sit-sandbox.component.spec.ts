import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitSandboxComponent } from './sit-sandbox.component';

describe('SitSandboxComponent', () => {
  let component: SitSandboxComponent;
  let fixture: ComponentFixture<SitSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
