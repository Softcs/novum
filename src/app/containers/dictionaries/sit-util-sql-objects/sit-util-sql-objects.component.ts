import { Component, Inject, LOCALE_ID } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { GatewayService } from '@app/_services';
import { GridService } from '@app/_services/grid.service';
import { UrlService } from '@app/_services/url.service';

@Component({
  selector: 'app-sit-util-sql-objects',
  templateUrl: './sit-util-sql-objects.component.html',
  styleUrls: ['./sit-util-sql-objects.component.scss'],
  host: {class: 'router-flex'}
})
export class SitUtilSqlObjectsComponent extends SitDictBaseComponent {
  public autoGroupColumnDef;

  constructor(
    protected gatewayService: GatewayService,
    protected gridService: GridService,
    protected urlService: UrlService,
    @Inject(LOCALE_ID) protected locale: string) {
      super(gatewayService, gridService, urlService, locale)

      this.autoGroupColumnDef = { 
        cellRendererParams: {
          suppressCount: true
        }
      }
    };

  public prepareColumnsDefinitnion() {
   this.gridColumnsDefinition["sitUtilSQLObjects"] = [

      { headerName: 'Object name', field: 'ObjectName', filter: 'agTextColumnFilter', width: 400 },
      { headerName: 'Object type', field: 'Type', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'For script', field: 'ForScript', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered"},  
      { headerName: 'Is common', field: 'IsCommonData', width: 100, renderType: 'checkbox', cellClass: "grid-cell-centered"}      
    ];
    
   this.gridColumnsDefinition["sitUtilSQLObjectVersions"] = [       
      { headerName: 'Version Id', field: 'VersionId', type: "numericColumn", filter: 'agNumberColumnFilter', width: 120 },
      { headerName: 'Version date', field: 'VersionDate', filter: 'agTextColumnFilter', width: 150 ,
        renderType: "date", renderFormat: "yyyy-MM-dd HH:mm:ss" 
      },
      { headerName: 'Def checksum', field: 'DefinitionCs', type: "numericColumn", filter: 'agNumberColumnFilter', width: 120 },
      { headerName: 'DB version', field: 'DBVersion', type: "numericColumn", filter: 'agNumberColumnFilter', width: 120 }
    ];
    
    this.gridColumnsDefinition["sitUtilSQLAddBatches4Object"] = [       
      { headerName: 'For proc type', field: 'ForProcType', filter: 'agTextColumnFilter', width: 100, sort: 'asc' },
      { headerName: 'InProcOrder', field: 'InProcOrder', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100, sort: 'asc', 
        headerTooltip: 'Kolejność w procedurze' },
      { headerName: 'Spot ident', field: 'SpotIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Order', field: 'Order', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100, sort: 'asc',
        headerTooltip: 'Kolejność w grupie spot' },
      { headerName: 'Description', field: 'Description', filter: 'agTextColumnFilter', width: 400 }
     ];
    
    this.gridColumnsDefinition["sitUtilSQLObjectRoutineColumns"] = [       
      { headerName: 'Nazwa kolumny', field: 'ColumnName', filter: 'agNumberColumnFilter', width: 150 },
      { headerName: 'Typ danych', field: 'DataType', filter: 'agNumberColumnFilter', width: 150 }
    ];
  }
}