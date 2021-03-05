import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitGridCellRendererComponent } from './sit-grid-cell-renderer.component';

describe('SitGridCellRendererComponent', () => {
  let component: SitGridCellRendererComponent;
  let fixture: ComponentFixture<SitGridCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitGridCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitGridCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
