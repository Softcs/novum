import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCourierBookCourierEditComponent } from './sit-courier-book-courier-edit.component';

describe('SitCourierBookCourierEditComponent', () => {
  let component: SitCourierBookCourierEditComponent;
  let fixture: ComponentFixture<SitCourierBookCourierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCourierBookCourierEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCourierBookCourierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
