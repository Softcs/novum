import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cConfigEditComponent } from './sit-b2c-config-edit.component';

describe('SitB2cConfigEditComponent', () => {
  let component: SitB2cConfigEditComponent;
  let fixture: ComponentFixture<SitB2cConfigEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cConfigEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
