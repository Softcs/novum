import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications',
  templateUrl: './sit-publications.component.html',
  styleUrls: ['./sit-publications.component.scss'],
  host: {class: 'router-flex sit-publications-component'}
})
export class SitPublicationsComponent extends SitDictBaseComponent {
  link: any;
  ean: any;
  groupDefaultExpanded: any;
  getDataPath: any;
  autoGroupColumnDef: any;
  imgPrvHeight: string = '55';


  public getImageUrlPrv(data:any) {
    if (!data || !data.sitImagesG_prv || !data.FileName) {
      return 'brak';
    }
    return '<img height="' + this.imgPrvHeight + '" class="img-for-grid-mini" src="' + this.urlService.getImageUrl(data.sitImagesG_prv, data.FileName_prv) + '" title="grafika: ' + data.ProductName + '" alt="grafika dla: ' + data.ProductName + '"/>';
  }

  public prepareColumnsDefinitnion() {

    this.autoGroupColumnDef = {
      headerName: 'Struktura',
      minWidth: 400,
      cellRendererParams: { suppressCount: true },
      sort:'asc'
    };

    this.groupDefaultExpanded = 0;

    this.getDataPath = function (data) {
      return data.dataPath;
    };

    this.gridColumnsDefinition["sitPublications"] = [
      { headerName: 'Id', field: 'sitPublicationsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsG', width: 100, defaultVisibility: false },  
      { headerName: 'Publikacja', field: 'PublicationIdent', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Tytuł', field: 'Title', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Imprint', field: 'Imprint', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition["sitPublicationsProducts"] = [
      { headerName: 'Id', field: 'sitPublicationsProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsProductsG', width: 100, defaultVisibility: false }, 
      { headerName: 'Okładka', 
        field: 'sitImagesG_prv', 
        maxWidth: 90, 
        resizable: true,
        autoHeight: true,
        cellRenderer: (params:any) => this.getImageUrlPrv(params.data)
      },
      { headerName: 'Identfikator', field: 'ProductIdent', width: 130},
      { headerName: 'EAN', field: 'EAN', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nazwa', field: 'ProductName', width: 300},
      { headerName: 'Status', field: 'StatusValueName_Main', filter: 'agSetColumnFilter', width: 100, floatingFilter: false, 
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
      { headerName: 'B2C', field: 'IsB2C', filter: 'agSetColumnFilter', width: 80, renderType: 'checkbox', suppressMenu: true, cellClass: "grid-cell-centered", defaultVisibility: false },
    ];

    this.gridColumnsDefinition["sitPublicationProductProjects"] = [
      { headerName: 'Id', field: 'sitProjectsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProjectsG', width: 100, defaultVisibility: false },  
      { headerName: 'Projekt', field: 'ProjectIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'ProjectName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Data plan.', field: 'ReleaseDatePlan', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Data rzecz.', field: 'ReleaseDateAct', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Nakład', field: 'Circulation', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Manager', field: 'Manager', filter: 'agTextColumnFilter', width: 150 },
    ];

    this.gridColumnsDefinition["sitPublicationThemaCodes"] = [
      { headerName: 'Id', field: 'sitThemaCodeListId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitThemaCodeListG', width: 100, defaultVisibility: false },
      { headerName: ' ', field: 'IsActive', width: 100, sortable: false, renderType: 'checkbox', cellClass: "grid-cell-centered"},
      { headerName: 'Opis', field: 'CodeDescription', width: 300, sortable: false, filter: 'agTextColumnFilter', floatingFilter: true},
//      { headerName: 'Info dodatkowe', field: 'CodeNotes', width: 500, sortable: false, filter: 'agTextColumnFilter', floatingFilter: true, tooltipField: 'CodeNotes'},
    ];

    this.gridColumnsDefinition["sitRoyaltiesPeriodsForPublication"] = [
      { headerName: 'Data od', field: 'DateFrom', filter: 'agTextColumnFilter', width: 100, sortable: false, sort: 'desc' },
      { headerName: 'Data do', field: 'DateTo', filter: 'agTextColumnFilter', width: 100, sortable: false },
      { headerName: 'Numer umowy', field: 'AgreementNo', filter: 'agTextColumnFilter', width: 200, sortable: false},
      { headerName: 'Naliczono', field: 'RoyaltiesExists', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered", floatingFilter: false, sortable: false},
      { headerName: 'Błędne nalicznie', field: 'RoyaltiesError', width: 130, renderType: 'checkbox', cellClass: "grid-cell-centered", floatingFilter: false, sortable: false},
    ];    

    this.gridColumnsDefinition["sitPublicationContributors"] = [
      { headerName: 'Id', field: 'sitPublicationContributorsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationContributorsG', width: 100, defaultVisibility: false },
      { headerName: 'Rola', field: 'ContributorRoleName', width: 150, filter: 'agTextColumnFilter', },
      { headerName: 'Twórca', field: 'PersonName', width: 300, filter: 'agTextColumnFilter', },
    ];    

    this.gridColumnsDefinition["sitProducts4PubContributors"] = [
      { headerName: 'Id', field: 'sitProducts4PubContributorsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitProducts4PubContributorsG', width: 100, defaultVisibility: false },
      { headerName: 'Rola', field: 'ContributorRoleName', width: 150, filter: 'agTextColumnFilter', },
      { headerName: 'Twórca', field: 'PersonName', width: 300, filter: 'agTextColumnFilter', },
    ];    

  }

   activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }   
}
