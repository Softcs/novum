import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-contributors',
  templateUrl: './sit-contributors.component.html',
  styleUrls: ['./sit-contributors.component.scss'],
  host: {class: 'router-flex'}
})
export class SitContributorsComponent extends SitDictBaseComponent {

  link: string;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitContributors"] = [
      { headerName: 'Id', field: 'sitContributorsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitContributorsG', width: 100, defaultVisibility: false },      
      { headerName: 'Twórca', field: 'PersonName', filter: 'agTextColumnFilter', width: 250,},
      { headerName: 'Tytuł', field: 'TitlesBeforeNames', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Imię', field: 'NamesBeforeKey', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Prefix', field: 'PrefixToKey', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Nazwisko', field: 'KeyNames', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Postfix', field: 'SuffixToKey', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Twórca', field: 'PersonNameInverted', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
    ];

    this.gridColumnsDefinition["sitContributorAlternativeNames"] = [
      { headerName: 'Id', field: 'sitContributorAlternativeNamesId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitContributorAlternativeNamesG', width: 100, defaultVisibility: false },      
      { headerName: 'Pseudonim', field: 'PersonName', filter: 'agTextColumnFilter', width: 250,},
    ];    
  }

  activeRowContributorsChanged(activeRow) {
    this.link = activeRow?.sitImagesG == null
      ? this.urlService.getImageUrl("noimage", "noimage.jpg") // kiedy brak rekordu
      :  this.urlService.getImageUrl(activeRow.sitImagesG, activeRow.FileName) ;
  }
}