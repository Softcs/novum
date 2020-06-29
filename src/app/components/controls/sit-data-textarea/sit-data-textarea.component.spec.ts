import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitDataTextareaComponent } from './sit-data-textarea.component';

describe('SitDataTextareaComponent', () => {
  let component: SitDataTextareaComponent;
  let fixture: ComponentFixture<SitDataTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
