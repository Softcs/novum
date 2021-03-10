import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-util-converter-frames',
  templateUrl: './sit-util-converter-frames.component.html',
  styleUrls: ['./sit-util-converter-frames.component.scss'],
  host: {class: 'router-flex'}
})
export class SitUtilConverterFramesComponent extends SitDictBaseComponent {
  public prepareColumnsDefinitnion() {
   this.gridColumnsDefinition["sitUtilConverterFrames"] = [

      { headerName: 'Number', field: 'FrameNumber', type: "numericColumn", filter: 'agNumberColumnFilter', width: 100, sort: 'desc' },
      { headerName: 'Date', field: 'FrameDate', filter: 'agTextColumnFilter', width: 120 ,
      renderType: "date", renderFormat: "yyyy-MM-dd HH:mm" 
      },
      { headerName: 'Name', field: 'LoginName', filter: 'agTextColumnFilter', width: 100 },
      { headerName: 'Status', field: 'FrameStatus',type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
        ];
    
   this.gridColumnsDefinition["sitUtilConverterDBVersions"] = [       
      { headerName: 'database_id', field: 'database_id', type: "numericColumn", filter: 'agNumberColumnFilter', width: 120 },
      { headerName: 'DBName', field: 'DBName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'DBVersion', field: 'DBVersion',type: "numericColumn", filter: 'agNumberColumnFilter', width: 100 },
         ]
       }
   

  
}
