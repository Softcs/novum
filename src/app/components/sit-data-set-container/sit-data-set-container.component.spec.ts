import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDataSetContainerComponent } from './sit-data-set-container.component';

describe('SitDataSetContainerComponent', () => {
  let component: SitDataSetContainerComponent;
  let fixture: ComponentFixture<SitDataSetContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataSetContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataSetContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
