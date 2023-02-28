import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitImagesInsComponent } from './sit-images-ins.component';

describe('SitImagesInsComponent', () => {
  let component: SitImagesInsComponent;
  let fixture: ComponentFixture<SitImagesInsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitImagesInsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitImagesInsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
