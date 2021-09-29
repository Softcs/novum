import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCustomersGroupsComponent } from './sit-customers-groups.component';

describe('SitCustomersGroupsComponent', () => {
  let component: SitCustomersGroupsComponent;
  let fixture: ComponentFixture<SitCustomersGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCustomersGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCustomersGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
