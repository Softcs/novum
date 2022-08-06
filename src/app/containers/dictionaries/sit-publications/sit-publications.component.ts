import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-publications',
  templateUrl: './sit-publications.component.html',
  styleUrls: ['./sit-publications.component.scss'],
  host: {class: 'router-flex'}
})
export class SitPublicationsComponent extends SitDictBaseComponent {

  link;
  ean;
  
  public prepareColumnsDefinitnion(){
    this.gridColumnsDefinition["sitPublications"] = [
      { headerName: 'Id', field: 'sitPublicationsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsG', width: 100, defaultVisibility: false },  
      { headerName: 'Publikacja', field: 'PublicationIdent', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Tytuł', field: 'Title', filter: 'agTextColumnFilter', width: 350 },
      { headerName: 'Status', field: 'StatusValueName', filter: 'agTextColumnFilter', width: 150 },
    ];
    this.gridColumnsDefinition["sitPublicationsProducts"] = [
      { headerName: 'Id', field: 'sitPublicationsProductsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitPublicationsProductsG', width: 100, defaultVisibility: false }, 
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
    ];
   }

   activeRowProductsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;

      this.ean = activeRow !== null ? activeRow.EAN : '';
  }   
}
