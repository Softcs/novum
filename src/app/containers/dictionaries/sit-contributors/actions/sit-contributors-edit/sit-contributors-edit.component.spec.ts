import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitContributorsEditComponent } from './sit-contributors-edit.component';

describe('SitContributorsEditComponent', () => {
  let component: SitContributorsEditComponent;
  let fixture: ComponentFixture<SitContributorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitContributorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitContributorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
