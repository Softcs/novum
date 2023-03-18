import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitB2cContributorsEditComponent } from './sit-b2c-contributors-edit.component';

describe('SitB2cContributorsEditComponent', () => {
  let component: SitB2cContributorsEditComponent;
  let fixture: ComponentFixture<SitB2cContributorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitB2cContributorsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitB2cContributorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
