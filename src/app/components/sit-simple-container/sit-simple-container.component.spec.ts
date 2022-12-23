import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitSimpleContainerComponent } from './sit-simple-container.component';

describe('SitSimpleContainerComponent', () => {
  let component: SitSimpleContainerComponent;
  let fixture: ComponentFixture<SitSimpleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitSimpleContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitSimpleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
