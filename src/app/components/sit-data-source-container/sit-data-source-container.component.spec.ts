import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataSourceContainerComponent } from './sit-data-source-container.component';

describe('SitDataSourceContainerComponent', () => {
  let component: SitDataSourceContainerComponent;
  let fixture: ComponentFixture<SitDataSourceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataSourceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataSourceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
