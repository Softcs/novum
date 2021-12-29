import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitDataTextareaComponent } from './sit-data-textarea.component';

describe('SitDataTextareaComponent', () => {
  let component: SitDataTextareaComponent;
  let fixture: ComponentFixture<SitDataTextareaComponent>;

  beforeEach(waitForAsync(() => {
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
