import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitWhiteListVATComponent } from './sit-white-list-vat.component';

describe('SitWhiteListVATComponent', () => {
  let component: SitWhiteListVATComponent;
  let fixture: ComponentFixture<SitWhiteListVATComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitWhiteListVATComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitWhiteListVATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
