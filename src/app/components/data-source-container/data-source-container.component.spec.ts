import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSourceContainerComponent } from './data-source-container.component';

describe('DataSourceContainerComponent', () => {
  let component: DataSourceContainerComponent;
  let fixture: ComponentFixture<DataSourceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSourceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSourceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
