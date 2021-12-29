import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SitKancelariaComponent } from './sit-kancelaria.component';

describe('SitKancelariaComponent', () => {
  let component: SitKancelariaComponent;
  let fixture: ComponentFixture<SitKancelariaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitKancelariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitKancelariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
