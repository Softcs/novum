import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitLanguagesEditComponent } from './sit-languages-edit.component';

describe('SitLanguagesEditComponent', () => {
  let component: SitLanguagesEditComponent;
  let fixture: ComponentFixture<SitLanguagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitLanguagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitLanguagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
