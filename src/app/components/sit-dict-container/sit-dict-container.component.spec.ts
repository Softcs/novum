import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { DictContainerComponent } from './sit-dict-container.component';

describe('DictContainerComponent', () => {
  let component: DictContainerComponent;
  let fixture: ComponentFixture<DictContainerComponent>;

  beforeEach(waitForAsync(() => {
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
