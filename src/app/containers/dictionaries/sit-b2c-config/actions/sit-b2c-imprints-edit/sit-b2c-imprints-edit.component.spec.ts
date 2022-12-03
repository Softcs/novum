import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cImprintsEditComponent } from './sit-b2c-imprints-edit.component';

describe('SitB2cImprintsEditComponent', () => {
  let component: SitB2cImprintsEditComponent;
  let fixture: ComponentFixture<SitB2cImprintsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cImprintsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cImprintsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
