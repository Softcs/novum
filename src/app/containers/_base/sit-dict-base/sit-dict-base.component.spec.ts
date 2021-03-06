import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDictBaseComponent } from './sit-dict-base.component';

describe('SitDictBaseComponent', () => {
  let component: SitDictBaseComponent;
  let fixture: ComponentFixture<SitDictBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitDictBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDictBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
