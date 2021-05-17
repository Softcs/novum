import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsEditComponent } from './sit-publications-edit.component';

describe('SitPublicationsEditComponent', () => {
  let component: SitPublicationsEditComponent;
  let fixture: ComponentFixture<SitPublicationsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
