import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SitDataRadioComponent } from './sit-data-radio.component';

describe('SitDataRadioComponent', () => {
  let component: SitDataRadioComponent;
  let fixture: ComponentFixture<SitDataRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDataRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDataRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
