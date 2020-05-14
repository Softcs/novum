import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitJPKVatComponent } from './sit-jpkvat.component';

describe('SitJPKVatComponent', () => {
  let component: SitJPKVatComponent;
  let fixture: ComponentFixture<SitJPKVatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitJPKVatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitJPKVatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
