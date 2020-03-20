import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictContainerComponent } from './dict-container.component';

describe('DictContainerComponent', () => {
  let component: DictContainerComponent;
  let fixture: ComponentFixture<DictContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
