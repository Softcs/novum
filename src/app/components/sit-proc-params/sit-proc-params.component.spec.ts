import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';
import { SitProcParamsComponent } from './sit-proc-params.component';

describe('SitDictEditFormComponent', () => {
  let component: SitProcParamsComponent;
  let fixture: ComponentFixture<SitProcParamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SitProcParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProcParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
