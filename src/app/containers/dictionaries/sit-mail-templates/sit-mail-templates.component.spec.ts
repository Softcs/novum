import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitMailTemplatesComponent } from './sit-mail-templates.component';

describe('SitMailTemplatesComponent', () => {
  let component: SitMailTemplatesComponent;
  let fixture: ComponentFixture<SitMailTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitMailTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMailTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
