import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList  } from '@angular/core';
import { SitDictContainerComponent } from '@app/components/sit-dict-container';
import { DataSetWrapper } from '@app/_models';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';

@Component({
  selector: 'app-sit-documents',
  templateUrl: './sit-documents.component.html',
  styleUrls: ['./sit-documents.component.scss'],
  host: {class: 'router-flex'}
})
export class SitDocumentsComponent implements OnInit {
  @ViewChild('sitDictcontainer') dictContainer: SitDictContainerComponent;
  @ViewChildren('sitDictcontainer') dictContainers !: QueryList<SitDictContainerComponent>;

  currentUser: User;
  popupParent;
  columnDefsDocumentsHeaders;
  pinnedBottomRowDataDocumentsHeaders;
  columnDefsDocumentsPositions;
  columnDefsDocumentsVATFooter;

  constructor(
    private gatewayService: GatewayService,
    private gridService: GridService
    ) {
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.gatewayService.currentUser.subscribe(x => this.currentUser = x);
      this.popupParent = document.querySelector('body');

      //definicja kolumn nagłówków dowodów
      this.columnDefsDocumentsHeaders = [
        { headerName: 'Numer', field: 'DocumentNumber', sortable: true, resizable: true, filter: 'agTextColumnFilter' },
        { headerName: 'Data', field: 'DocumentDate', filter: 'agTextColumnFilter' },
        { headerName: 'Data sprz.', field: 'SalesDate', filter: 'agTextColumnFilter' },
        { headerName: 'Data  płat.', field: 'PaymentDate', filter: 'agTextColumnFilter' },
        { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', aggFunc: 'sum' },
        { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn' },
        { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn' },
        { headerName: 'Płatnik', field: 'PayerDesc02', filter: 'agTextColumnFilter' },
        { headerName: 'Opis', field: 'DocumentDescription', filter: 'agTextColumnFilter' },
      ];

      //definicja kolumn pozycji dowodów
      this.columnDefsDocumentsPositions = [
        { headerName: 'Lp', field: 'OrdNumber', type: 'numericColumn', sortable: true, resizable: true, suppressMenu: true, width: 50 },
        { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 130, floatingFilter: true },
        { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120, floatingFilter: true },
        { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', floatingFilter: true },
        { headerName: 'Netto', field: 'Net', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Vat', field: 'VAT', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
        { headerName: 'Brutto', field: 'Gross', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 80 },
      ];

      //definicja kolumn stopki vat
      this.columnDefsDocumentsVATFooter = [
        { headerName: 'SV', field: 'VATRatesIdent', suppressMenu: true, flex: 1 },
        { headerName: 'Netto', field: 'Net', type: 'numericColumn', suppressMenu: true, flex: 2 },
        { headerName: 'Vat', field: 'VAT', type: 'numericColumn', suppressMenu: true, flex: 2 },
        { headerName: 'Brutto', field: 'Gross', type: 'numericColumn', suppressMenu: true, flex: 2 },
      ];

    }


  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridService.setDefGridOptionsOnReady(params);
  }
}
