import { Component, ViewEncapsulation, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-contributors',
  templateUrl: './sit-contributors.component.html',
  encapsulation : ViewEncapsulation.None,
  styleUrls: ['./sit-contributors.component.scss'],
  host: {class: 'router-flex sit-contributors-component'}
})
export class SitContributorsComponent extends SitDictBaseComponent {

  link: string;

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitContributors"] = [
      { headerName: 'Id', field: 'sitContributorsId', type: 'numericColumn', filter: 'agNumberColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitContributorsG', width: 100, defaultVisibility: false },      
      { headerName: 'Twórca', field: 'PersonName', filter: 'agTextColumnFilter', width: 250,},
      { headerName: 'Tytuł', field: 'TitlesBeforeNames', filter: 'agTextColumnFilter', width: 80, defaultVisibility: false  },
      { headerName: 'Imię', field: 'NamesBeforeKey', filter: 'agTextColumnFilter', width: 150, defaultVisibility: false  },
      { headerName: 'Prefix', field: 'PrefixToKey', filter: 'agTextColumnFilter', width: 80, defaultVisibility: false  },
      { headerName: 'Nazwisko', field: 'KeyNames', filter: 'agTextColumnFilter', width: 150, defaultVisibility: false  },
      { headerName: 'Postfix', field: 'SuffixToKey', filter: 'agTextColumnFilter', width: 80, defaultVisibility: false  },
      { headerName: 'Notacja odwrotna', field: 'PersonNameInverted', filter: 'agTextColumnFilter', width: 250, defaultVisibility: true},
      { headerName: 'Social', 
        width: 130,
        // flex: 1,
        cellRenderer: (params:any) => {

// console.log('params.data: ', params.data);

        return '<div class="social-list-el">'
          + (params.data.WWW ? '<a class="afa-home" href="' + params.data.WWW + '" target="_blank" title="WWW: ' + params.data.PersonName + '"><i class="fas fa-home"></i></a> ' : '')
          + (params.data.Twitter ? '<a class="afa-twitter" href="' + params.data.Twitter + '" target="_blank" title="Twitter: ' + params.data.PersonName + '"><i class="fab fa-twitter"></i></a> ' : '')
          + (params.data.Facebook ? '<a class="afa-facebook" href="' + params.data.Facebook + '" target="_blank" title="Facebook: ' + params.data.PersonName + '"><i class="fab fa-facebook"></i></a> ' : '')
          + (params.data.Instagram ? '<a class="afa-instagram" href="' + params.data.Instagram + '" target="_blank" title="Instagram: ' + params.data.PersonName + '"><i class="fab fa-instagram"></i></a> ' : '')
          + (params.data.TikTok ? '<a class="afa-tiktok" href="' + params.data.TikTok + '" target="_blank" title="Tiktok: ' + params.data.PersonName + '"><i class="fab fa-tiktok"></i></a> ' : '')
        + '</div>';
        }

      },
      { headerName: 'WWW', field: 'WWW', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
      { headerName: 'Facebook', field: 'Facebook', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
      { headerName: 'Instagram', field: 'Instagram', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
      { headerName: 'TikTok', field: 'TikTok', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
      { headerName: 'Twitter', field: 'Twitter', filter: 'agTextColumnFilter', width: 250, defaultVisibility: false},
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