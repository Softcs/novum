import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitAttachmentsInsComponent } from './sit-attachments-ins.component';

describe('SitAttachmentsInsComponent', () => {
  let component: SitAttachmentsInsComponent;
  let fixture: ComponentFixture<SitAttachmentsInsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitAttachmentsInsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitAttachmentsInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
