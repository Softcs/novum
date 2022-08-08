import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitProduct4PubCollectionsEditComponent } from './sit-product4-pub-collections-edit.component';

describe('SitProduct4PubCollectionsEditComponent', () => {
  let component: SitProduct4PubCollectionsEditComponent;
  let fixture: ComponentFixture<SitProduct4PubCollectionsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitProduct4PubCollectionsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitProduct4PubCollectionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
