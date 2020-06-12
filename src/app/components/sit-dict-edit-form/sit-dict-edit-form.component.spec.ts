import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SitDictEditFormComponent } from './sit-dict-edit-form.component';

describe('SitDictEditFormComponent', () => {
  let component: SitDictEditFormComponent;
  let fixture: ComponentFixture<SitDictEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitDictEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitDictEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
