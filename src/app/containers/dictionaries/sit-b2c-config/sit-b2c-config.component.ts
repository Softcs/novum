import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-b2c-config',
  templateUrl: './sit-b2c-config.component.html',
  styleUrls: ['./sit-b2c-config.component.scss'],
  host: {class: 'router-flex'}
})
export class SitB2cConfigComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitB2CConfig"] = [
      { headerName: 'Id', field: 'sitB2CConfigId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CConfigG', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'B2CConfigIdent', width: 200 },
      { headerName: 'Nazwa', field: 'B2CConfigName', width: 200 },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
    ];

    this.gridColumnsDefinition["sitB2CProducts"] = [
      { headerName: 'Id', field: 'sitB2CProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CProductsG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitProductsId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Identyfikator', field: 'ProductIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', tooltipField: 'ProductName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status prod', field: 'ProductStatusValueName_Main', filter: 'agSetColumnFilter', width: 140, floatingFilter: false, 
        cellStyle: function(params) {
          if (params.value === 'W przygotowaniu') { return { color: 'violet', 'font-weight': 600 }; }
          else if (params.value === 'Zapowiedź') { return { color: 'orange', 'font-weight': 600 }; }
          else if (params.value === 'Nowość') { return { color: 'rgb(153, 0, 0)', 'font-weight': 600 }; }
          else if (params.value === 'Aktywna') { return { color: 'rgb(20, 152, 46)', 'font-weight': 600 }; }
          else if (params.value === 'Wyprzedaż') { return { color: 'rgb(11, 23, 255)', 'font-weight': 600 }; }
          else if (params.value === 'Wycofana') { return { color: 'black', 'font-weight': 600 }; }          
          else { return null; }
        }
      },
      { headerName: 'Prod. akt.', field: 'IsActive_Product', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered" },
      { headerName: 'B2C', field: 'IsB2C', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered", defaultVisibility: true },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CPublicationAudience"] = [
      { headerName: 'Id', field: 'sitB2CPublicationAudienceId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CPublicationAudienceG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitPublicationAudienceId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Identyfikator', field: 'AudienceIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'Nazwa', field: 'AudienceName', tooltipField: 'AudienceName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CPublicationsFormsOfRelease"] = [
      { headerName: 'Id', field: 'sitB2CPublicationsFormsOfReleaseId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CPublicationsFormsOfReleaseG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitPublicationsFormsOfReleaseId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Identyfikator', field: 'FormOfReleaseIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'Nazwa', field: 'FormOfReleaseDesc', tooltipField: 'FormOfReleaseDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CImprints"] = [
      { headerName: 'Id', field: 'sitB2CImprintsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CImprintsG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitProductsTypesId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Identyfikator', field: 'ProductsTypeIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'Nazwa', field: 'ProductsTypeDesc', tooltipField: 'ProductsTypeDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CPublicationSubjects"] = [
      { headerName: 'Id', field: 'sitB2CPublicationSubjectsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CPublicationSubjectsG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitPublicationSubjectsId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Identyfikator', field: 'PublicationSubjectIdent', filter: 'agTextColumnFilter', width: 150, },
      { headerName: 'Nazwa', field: 'PublicationSubjectName', tooltipField: 'PublicationSubjectName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CContributors"] = [
      { headerName: 'Id', field: 'sitB2CContributorsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 80, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitB2CContributorsG', width: 150, defaultVisibility: false },
      { headerName: 'Aktywny', field: 'IsActive', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered"},
      { headerName: 'B2C id', field: 'sitContributorsId', filter: 'agTextColumnFilter', width: 100, },
      { headerName: 'Nazwa', field: 'PersonName', tooltipField: 'PersonName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Status wys.', field: 'StatusValueIdent_Main', tooltipField: 'StatusValueName_Main', width: 100, suppressMenu: true},
    ];

    this.gridColumnsDefinition["sitB2CLog"] = [
      { headerName: 'ID', field: 'LogId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Data', field: 'LogDate', filter: 'agDateColumnFilter', width: 140, sort: 'desc',
        renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'Typ komunikatu', field: 'MessageType', filter: 'agTextColumnFilter', width: 150},
      { headerName: 'Zapytanie', field: 'Request', filter: 'agTextColumnFilter', width: 450 },
      { headerName: 'Odpowiedź', field: 'Response', filter: 'agTextColumnFilter', width: 450 },
    ];

    this.gridColumnsDefinition["sitB2CProductsHistory"] = [
      { headerName: 'ID', field: 'sitB2CProductsHistoryId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, suppressMenu: true },
      { headerName: 'Data', field: 'ChangeDate', filter: 'agDateColumnFilter', width: 140, sort: 'desc',
        renderType: "date", renderFormat: "yyyy-MM-dd H:mm:ss" },
      { headerName: 'Operator', field: 'UserLogin', filter: 'agTextColumnFilter', width: 150, suppressMenu: true },
      { headerName: 'Opr.', field: 'OprType', filter: 'agTextColumnFilter', width: 50, suppressMenu: true  },
      { headerName: 'Komentarz', field: '__HistoryComments__', tooltipField: '__HistoryComments__', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Info', field: 'Data', filter: 'agTextColumnFilter', width: 200, defaultVisibility: false  },
    ];
    
   }
}

