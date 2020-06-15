import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SitProcParamsComponent } from './sit-proc-params.component';

describe('SitDictEditFormComponent', () => {
  let component: SitProcParamsComponent;
  let fixture: ComponentFixture<SitProcParamsComponent>;

  beforeEach(async(() => {
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
