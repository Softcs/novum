import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitMsgContainerComponent } from './sit-msg-container.component';

describe('SitMsgContainerComponent', () => {
  let component: SitMsgContainerComponent;
  let fixture: ComponentFixture<SitMsgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitMsgContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitMsgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
