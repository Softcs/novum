import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProducts4pubContributorsEditComponent } from './sit-products4pub-contributors-edit.component';

describe('SitProducts4pubContributorsEditComponent', () => {
  let component: SitProducts4pubContributorsEditComponent;
  let fixture: ComponentFixture<SitProducts4pubContributorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProducts4pubContributorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProducts4pubContributorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
