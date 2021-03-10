import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models';
import { data } from 'jquery';
@Component({
  selector: 'app-sit-attendance-list',
  templateUrl: './sit-attendance-list.component.html',
  styleUrls: ['./sit-attendance-list.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAttendanceListComponent extends SitDictBaseComponent {
  gridApi;
  columnApi;
  dataSourceResponseWrapper: DataSetWrapper;

  public prepareColumnsDefinitnion() {

    this.gridColumnsDefinition['sitAttendanceList'] = [
      { headerName: 'Nazwisko', field: 'EmployeeName', suppressMenu: true, pinned: 'left', width: 250, sort: 'asc' },
      { headerName: '1', field: '01', tooltipField: '01Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '01' ? 'today' : params.data['01DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '2', field: '02', tooltipField: '02Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '02' ? 'today' : params.data['02DayOff'] === 1 ? 'dayoff' : '';
        },
     },
      { headerName: '3', field: '03', tooltipField: '03Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '03' ? 'today' : params.data['03DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '4', field: '04', tooltipField: '04Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '04' ? 'today' : params.data['04DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '5', field: '05', tooltipField: '05Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '05' ? 'today' : params.data['05DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '6', field: '06', tooltipField: '06Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '06' ? 'today' : params.data['06DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '7', field: '07', tooltipField: '07Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '07' ? 'today' : params.data['07DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '8', field: '08', tooltipField: '08Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '09' ? 'today' : params.data['09DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '9', field: '09', tooltipField: '09Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '9' ? 'today' : params.data['09DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '10', field: '10', tooltipField: '10Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '10' ? 'today' : params.data['06DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '11', field: '11', tooltipField: '11Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '11' ? 'today' : params.data['11DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '12', field: '12', tooltipField: '12Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '12' ? 'today' : params.data['12DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '13', field: '13', tooltipField: '13Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '13' ? 'today' : params.data['13DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '14', field: '14', tooltipField: '14Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '14' ? 'today' : params.data['14DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '15', field: '15', tooltipField: '15Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '15' ? 'today' : params.data['15DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '16', field: '16', tooltipField: '16Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '16' ? 'today' : params.data['16DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '17', field: '17', tooltipField: '17Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '17' ? 'today' : params.data['17DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '18', field: '18', tooltipField: '18Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '18' ? 'today' : params.data['18DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '19', field: '19', tooltipField: '19Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '19' ? 'today' : params.data['19DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '20', field: '20', tooltipField: '20Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '20' ? 'today' : params.data['20DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '21', field: '21', tooltipField: '21Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '21' ? 'today' : params.data['21DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '22', field: '22', tooltipField: '22Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '22' ? 'today' : params.data['22DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '23', field: '23', tooltipField: '23Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '23' ? 'today' : params.data['23DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '24', field: '24', tooltipField: '24Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '24' ? 'today' : params.data['24DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '25', field: '25', tooltipField: '25Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '25' ? 'today' : params.data['25DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '26', field: '26', tooltipField: '26Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '26' ? 'today' : params.data['26DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '27', field: '27', tooltipField: '27Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '27' ? 'today' : params.data['27DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '28', field: '28', tooltipField: '28Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '28' ? 'today' : params.data['28DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '29', field: '29', tooltipField: '29Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '29' ? 'today' : params.data['29DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '30', field: '30', tooltipField: '30Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '30' ? 'today' : params.data['30DayOff'] === 1 ? 'dayoff' : '';
        },
      },
      { headerName: '31', field: '31', tooltipField: '31Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDay'] === '31' ? 'today' : params.data['31DayOff'] === 1 ? 'dayoff' : '';
        },
      },
    ]
  }

  refreshAfter(dataSourceManager) {
    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitAttendanceList");
    const days=this.dataSourceResponseWrapper.activeRow['DaysCount'];

    if (days === 31) {
      this.columnApi.setColumnsVisible(['29','30','31'],true);
      return;
    }

    if (days === 30) {
      this.columnApi.setColumnsVisible(['31'],false);
      this.columnApi.setColumnsVisible(['29','30'],true);
      return;
    }

    if (days === 29) {
      this.columnApi.setColumnsVisible(['30','31'],false);
      this.columnApi.setColumnsVisible(['29'],true);
      return;
    }
    if (days === 28) {
      this.columnApi.setColumnsVisible(['29','30','31'],false);
      return;
    }

  }

  onGridReady(params){
    this.gridApi=params.api;
    this.columnApi=params.columnApi;
  }

  onCellClicked(e){
    this.dataSourceResponseWrapper.rows.forEach (row => {
      if (e.colDef.colId === 'EmployeeName') {
        this.dataSourceResponseWrapper.setFieldValue('Date','',row)
      } else {
        this.dataSourceResponseWrapper.setFieldValue('Date',row['Year']+'-'+row['Month']+'-'+e.colDef.colId, row)
      }
      }
    )
  }
}
