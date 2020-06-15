import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataSetContainerComponent } from './sit-data-source-container.component';

describe('SitDataSetContainerComponent', () => {
  let component: SitDataSetContainerComponent;
  let fixture: ComponentFixture<SitDataSetContainerComponent>;

  beforeEach(async(() => {
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
