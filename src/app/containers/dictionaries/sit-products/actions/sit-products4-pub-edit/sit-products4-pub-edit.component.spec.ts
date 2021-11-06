import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProducts4PubEditComponent } from './sit-products4-pub-edit.component';

describe('SitProducts4PubEditComponent', () => {
  let component: SitProducts4PubEditComponent;
  let fixture: ComponentFixture<SitProducts4PubEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProducts4PubEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProducts4PubEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
