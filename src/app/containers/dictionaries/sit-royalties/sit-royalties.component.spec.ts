import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitRoyaltiesComponent } from './sit-royalties.component';

describe('SitRoyaltiesComponent', () => {
  let component: SitRoyaltiesComponent;
  let fixture: ComponentFixture<SitRoyaltiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitRoyaltiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitRoyaltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
