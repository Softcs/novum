import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitStatusValuesTransitionsEditComponent } from './sit-status-values-transitions-edit.component';

describe('SitStatusValuesTransitionsEditComponent', () => {
  let component: SitStatusValuesTransitionsEditComponent;
  let fixture: ComponentFixture<SitStatusValuesTransitionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitStatusValuesTransitionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitStatusValuesTransitionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
