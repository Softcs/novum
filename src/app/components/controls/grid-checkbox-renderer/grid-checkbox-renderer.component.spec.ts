import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { GridCheckboxRendererComponent } from './grid-checkbox-renderer.component';

describe('GridCheckboxRendererComponent', () => {
  let component: GridCheckboxRendererComponent;
  let fixture: ComponentFixture<GridCheckboxRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridCheckboxRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCheckboxRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
