import { Component, ViewEncapsulation} from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';
import { DataSetWrapper } from '@app/_models';

@Component({
  selector: 'app-sit-attendance-list',
  templateUrl: './sit-attendance-list.component.html',
  styleUrls: ['./sit-attendance-list.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host: {class: 'router-flex sit-attendance-list-component'}
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
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '01' ? 'today' : params.data['01DayOff'] === 1 ? 'dayoff' : params.data['01'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '2', field: '02', tooltipField: '02Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '02' ? 'today' : params.data['02DayOff'] === 1 ? 'dayoff' : params.data['02'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
     },
      { headerName: '3', field: '03', tooltipField: '03Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '03' ? 'today' : params.data['03DayOff'] === 1 ? 'dayoff' : params.data['03'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '4', field: '04', tooltipField: '04Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '04' ? 'today' : params.data['04DayOff'] === 1 ? 'dayoff' : params.data['04'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '5', field: '05', tooltipField: '05Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '05' ? 'today' : params.data['05DayOff'] === 1 ? 'dayoff' : params.data['05'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '6', field: '06', tooltipField: '06Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '06' ? 'today' : params.data['06DayOff'] === 1 ? 'dayoff' : params.data['06'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '7', field: '07', tooltipField: '07Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '07' ? 'today' : params.data['07DayOff'] === 1 ? 'dayoff' : params.data['07'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '8', field: '08', tooltipField: '08Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '08' ? 'today' : params.data['08DayOff'] === 1 ? 'dayoff' : params.data['08'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '9', field: '09', tooltipField: '09Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '09' ? 'today' : params.data['09DayOff'] === 1 ? 'dayoff' : params.data['09'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '10', field: '10', tooltipField: '10Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '10' ? 'today' : params.data['10DayOff'] === 1 ? 'dayoff' : params.data['10'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '11', field: '11', tooltipField: '11Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '11' ? 'today' : params.data['11DayOff'] === 1 ? 'dayoff' : params.data['11'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '12', field: '12', tooltipField: '12Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '12' ? 'today' : params.data['12DayOff'] === 1 ? 'dayoff' : params.data['12'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '13', field: '13', tooltipField: '13Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '13' ? 'today' : params.data['13DayOff'] === 1 ? 'dayoff' : params.data['13'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '14', field: '14', tooltipField: '14Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '14' ? 'today' : params.data['14DayOff'] === 1 ? 'dayoff' : params.data['14'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '15', field: '15', tooltipField: '15Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '15' ? 'today' : params.data['15DayOff'] === 1 ? 'dayoff' : params.data['15'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '16', field: '16', tooltipField: '16Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '16' ? 'today' : params.data['16DayOff'] === 1 ? 'dayoff' : params.data['16'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '17', field: '17', tooltipField: '17Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '17' ? 'today' : params.data['17DayOff'] === 1 ? 'dayoff' : params.data['17'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '18', field: '18', tooltipField: '18Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '18' ? 'today' : params.data['18DayOff'] === 1 ? 'dayoff' : params.data['18'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '19', field: '19', tooltipField: '19Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '19' ? 'today' : params.data['19DayOff'] === 1 ? 'dayoff' : params.data['19'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '20', field: '20', tooltipField: '20Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '20' ? 'today' : params.data['20DayOff'] === 1 ? 'dayoff' : params.data['20'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '21', field: '21', tooltipField: '21Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '21' ? 'today' : params.data['21DayOff'] === 1 ? 'dayoff' : params.data['21'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '22', field: '22', tooltipField: '22Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '22' ? 'today' : params.data['22DayOff'] === 1 ? 'dayoff' : params.data['22'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '23', field: '23', tooltipField: '23Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '23' ? 'today' : params.data['23DayOff'] === 1 ? 'dayoff' : params.data['23'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '24', field: '24', tooltipField: '24Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '24' ? 'today' : params.data['24DayOff'] === 1 ? 'dayoff' : params.data['24'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '25', field: '25', tooltipField: '25Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '25' ? 'today' : params.data['25DayOff'] === 1 ? 'dayoff' : params.data['25'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '26', field: '26', tooltipField: '26Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '26' ? 'today' : params.data['26DayOff'] === 1 ? 'dayoff' : params.data['26'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '27', field: '27', tooltipField: '27Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '27' ? 'today' : params.data['27DayOff'] === 1 ? 'dayoff' : params.data['27'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '28', field: '28', tooltipField: '28Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '28' ? 'today' : params.data['28DayOff'] === 1 ? 'dayoff' : params.data['28'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '29', field: '29', tooltipField: '29Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '29' ? 'today' : params.data['29DayOff'] === 1 ? 'dayoff' : params.data['29'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '30', field: '30', tooltipField: '30Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '30' ? 'today' : params.data['30DayOff'] === 1 ? 'dayoff' : params.data['30'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
      { headerName: '31', field: '31', tooltipField: '31Desc', suppressMenu: true, width: 50,
        cellClass: params => {
          return params.data['CurrentDate'] === params.data['Year'] + params.data['Month'] + '31' ? 'today' : params.data['31DayOff'] === 1 ? 'dayoff' : params.data['31'] === '•' ? 'present' : 'workday';
        },
        cellStyle: {'text-align': 'center'}
      },
    ]
  }

  refreshAfter(dataSourceManager) {
    this.dataSourceResponseWrapper = dataSourceManager?.getDateSourceWrapper("sitAttendanceList");

    if (!this.dataSourceResponseWrapper.activeRow['DaysCount'])
      { return };

    const days= this.dataSourceResponseWrapper.activeRow['DaysCount'];

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
        this.dataSourceResponseWrapper.setFieldValue('Date', '', row, false)
      } else {
        this.dataSourceResponseWrapper.setFieldValue('Date', row['Year']+'-'+row['Month']+'-'+e.colDef.colId, row, false)
      }
      }
    )
  }

  getPrintout() {
    //generuje wydruk w nowej zakładce
    const dataSourceResponseWrapper: DataSetWrapper = this.dictContainer.DataSetManager.getDateSourceWrapper('sitFilter');
    var url = this.urlService.getSecureRepUrl('22663809-36B6-71D5-4E60-07896B1A4BDA', 'dict', '05E9CF82-B0D3-4189-9431-3F119A17F5BE', dataSourceResponseWrapper.activeRow);
    window.open(url, '','height=700, width=1400, left=100,top=100');

  }
}
