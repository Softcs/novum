import { Component} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-sit-flats-rent',
  templateUrl: './sit-flats-rent.component.html',
  styleUrls: ['./sit-flats-rent.component.scss'],
  host: {class: 'router-flex'}
})
export class SitFlatsRentComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitFlatsRentFlats"] = [
      { headerName: 'ID', field: 'sitFlatsRentFlatsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentFlatsG', width: 100, defaultVisibility: false },
      { headerName: 'Mieszkanie', field: 'FlatIdent', filter: 'agTextColumnFilter', flex: 1,
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr><td style="width:50%">ID: ' + params.data["FlatIdent"] +'</td>'
              +(params.data["FlatName"] === '' ? '' : '<td style="text-align:right">Opis: ' + params.data["FlatName"] +'</td>')
              +'</tr>'
            + '<tr><td colspan="2"><b>' + params.data["Address"] +'</b></td></tr></table>'
        }
      },
    ];

    this.gridColumnsDefinition["sitFlatsRentTenancyAgreements"] = [
      { headerName: 'ID', field: 'sitFlatsRentTenancyAgreementsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentTenancyAgreementsG', width: 100, defaultVisibility: false },
      { headerName: 'Umowa', field: 'AgreementDate', filter: 'agTextColumnFilter', flex: 1,
        cellRenderer: function(params) {
          return '<table style="width:100%"><tr><td style="width:50%">Data umowy: ' + params.data["AgreementDate"] +'</td>'
              +(params.data["AgreementNumber"] === '' ? '' : '<td style="text-align:right">Numer umowy: ' + params.data["AgreementNumber"] +'</td>')
              +'</tr>'
            + '<tr><td colspan="2">Umowa od: ' + params.data["DateFrom"]
            +(params.data["DateTo"] === null ? '' : ' do: ' + params.data["DateTo"] +'</td>')
            +'</tr></table>'
        }
      },
    ];

    this.gridColumnsDefinition["sitFlatsRentTenants"] = [
      { headerName: 'ID', field: 'sitFlatsRentTenantsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentTenantsG', width: 100, defaultVisibility: false },
      { headerName: 'Najemca', field: 'Tenant', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Email', field: 'Email', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Telefon', field: 'Phone', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition['sitAttachments'] = [
      { headerName: 'ParentId', field: 'ParentId', defaultVisibility: false },
      { headerName: 'sitAttachmentsG', field: 'sitAttachmentsG', defaultVisibility: false },
      { headerName: 'Data dodania', field: 'InsertDate', width: 120,
         cellRenderer: (data) => { return formatDate(data.value, 'yyyy-MM-dd HH:mm', this.locale) }
      },
      { headerName: 'Nazwa pliku', field: 'FileName', width: 200 },
      { headerName: 'Opis', field: 'AttachmentDesc', width: 250 },
    ];

    this.gridColumnsDefinition["sitFlatsRentUtilitiesTypes"] = [
      { headerName: 'ID', field: 'sitFlatsRentUtilitiesTypesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentUtilitiesTypesG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'UtilityIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Nazwa', field: 'UtilityName', filter: 'agTextColumnFilter', width: 300 },

    ];
    
    this.gridColumnsDefinition["sitFlatsRentUtilitiesProviders"] = [
      { headerName: 'ID', field: 'sitFlatsRentUtilitiesProvidersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentUtilitiesProvidersG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator dostawcy', field: 'ProviderIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Nazwa', field: 'ProviderName', filter: 'agTextColumnFilter', width: 300 },      
      { headerName: 'Email', field: 'Email', filter: 'agTextColumnFilter', width: 250 },
      { headerName: 'Telefon', field: 'Phone', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition["sitFlatsRentUtilities"] = [
      { headerName: 'ID', field: 'sitFlatsRentUtilitiesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentUtilitiesG', width: 100, defaultVisibility: false },
      { headerName: 'Medium', field: 'UtilityIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Dostawca', field: 'ProviderIdent', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Data od', field: 'DateFrom', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Data do', field: 'DateTo', filter: 'agTextColumnFilter', width: 120},
    ];
    
    this.gridColumnsDefinition["sitFlatsRentRentPositions"] = [
      { headerName: 'ID', field: 'sitFlatsRentRentPositionsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentRentPositionsG', width: 100, defaultVisibility: false },
      { headerName: 'Typ', field: 'PositionType', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'PositionDescription', filter: 'agTextColumnFilter', width: 300 },      
      { headerName: 'Przesunięcie okresu', field: 'PeriodShiftInMonth', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number'},
    ];

    this.gridColumnsDefinition["sitFlatsRentScheduleReceivables"] = [
      { headerName: 'ID', field: 'sitFlatsRentScheduleReceivablesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentScheduleReceivablesG', width: 100, defaultVisibility: false },
      { headerName: 'Data płatności', field: 'PaymentDate', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Typ', field: 'ReceivableType', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Opis', field: 'ReceivableDescription', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Okres od', field: 'PeriodFrom', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Okres do', field: 'PeriodTo', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Kwota', field: 'Amount', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number', agr: 'sum' },
      { headerName: 'Medium', field: 'UtilityIdent', filter: 'agTextColumnFilter', width: 300 },
    ];

    this.gridColumnsDefinition["sitFlatsRentMeters"] = [
      { headerName: 'ID', field: 'sitFlatsRentMetersId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentMetersG', width: 100, defaultVisibility: false },
      { headerName: 'Numer', field: 'MeterNumber', filter: 'agTextColumnFilter', width: 130 },
      { headerName: 'Opis', field: 'MeterDescription', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Data od', field: 'DateFrom', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Data do', field: 'DateTo', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Medium', field: 'UtilityIdent', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition["sitFlatsRentMetersReadings"] = [
      { headerName: 'ID', field: 'sitFlatsRentMetersReadingsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitFlatsRentMetersReadingsG', width: 100, defaultVisibility: false },
      { headerName: 'Data odczytu', field: 'ReadingDate', filter: 'agTextColumnFilter', width: 120},
      { headerName: 'Jednostka', field: 'Unit', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Stan', field: 'Quantity', filter: 'agTextColumnFilter', type: 'numericColumn', suppressMenu: true, width: 100, renderType: 'number' },
    ];    
  }
}

