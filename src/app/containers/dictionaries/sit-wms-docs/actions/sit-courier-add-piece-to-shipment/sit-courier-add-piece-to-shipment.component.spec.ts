import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitCourierAddPieceToShipmentComponent } from './sit-courier-add-piece-to-shipment.component';

describe('SitCourierAddPieceToShipmentComponent', () => {
  let component: SitCourierAddPieceToShipmentComponent;
  let fixture: ComponentFixture<SitCourierAddPieceToShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitCourierAddPieceToShipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitCourierAddPieceToShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
