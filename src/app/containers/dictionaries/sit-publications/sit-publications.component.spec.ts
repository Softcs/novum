import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitPublicationsComponent } from './sit-publications.component';

describe('SitPublicationsComponent', () => {
  let component: SitPublicationsComponent;
  let fixture: ComponentFixture<SitPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitPublicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
