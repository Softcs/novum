import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitActionsFormContainerComponent } from './sit-actions-form-container.component';

describe('SitActionsFormContainerComponent', () => {
  let component: SitActionsFormContainerComponent;
  let fixture: ComponentFixture<SitActionsFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitActionsFormContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitActionsFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
