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
    ];
    
    this.gridColumnsDefinition["sitUtilSQLObjectsToScript"] = [       
      { headerName: 'Object name', field: 'ObjectName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Event type', field: 'EventType', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Event date', field: 'EventDate', filter: 'agTextColumnFilter', width: 150 ,
      renderType: "date", renderFormat: "yyyy-MM-dd HH:mm:ss" 
      },
      { headerName: 'Login name', field: 'LoginName', filter: 'agTextColumnFilter', width: 120 },
      { headerName: 'Is new', field: 'IsNew', width: 100, renderType: 'checkbox'}      
     ];

    this.gridColumnsDefinition["sitUtilConverterDBObjectsDiff"] = [       
      { headerName: 'ObjectName', field: 'ObjectName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'sit_test', field: 'sit_test_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_test_chobot', field: 'sit_test_chobot_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_test_job', field: 'sit_test_job_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_test_publicat', field: 'sit_test_publicat_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit', field: 'sit_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_chobot', field: 'sit_chobot_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_company_template', field: 'sit_company_template_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_job', field: 'sit_job_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_job_abroad', field: 'sit_job_abroad_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_job_outsourcing', field: 'sit_job_outsourcing_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_publicat', field: 'sit_publicat_DBVerOk', width: 100, renderType: 'checkbox'},
      { headerName: 'sit_seidoit', field: 'sit_seidoit_DBVerOk', width: 100, renderType: 'checkbox'}
    ];     
  }
}
