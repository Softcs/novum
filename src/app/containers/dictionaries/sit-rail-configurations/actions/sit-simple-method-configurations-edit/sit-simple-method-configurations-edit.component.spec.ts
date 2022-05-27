import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitSimpleMethodConfigurationsEditComponent } from './sit-simple-method-configurations-edit.component';

describe('SitSimpleMethodConfigurationsEditComponent', () => {
  let component: SitSimpleMethodConfigurationsEditComponent;
  let fixture: ComponentFixture<SitSimpleMethodConfigurationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitSimpleMethodConfigurationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSimpleMethodConfigurationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
