import { Component, OnInit, ViewChild } from '@angular/core';


import { GatewayService } from '@app/_services';
import { DictContainerComponent } from '../../../components/dict-container';
import { DataSourceContainerComponent } from '../../../components/data-source-container';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

// export interface PeriodicElement {
//   RailConfigurationId: number;
//   CompanyId: number;
//   ClientGuid: string;
//   UserId: string;
//   OperationIdent: string;
//   Data: string;
//   IsActive: number;
//   Timeout: number;
//   TransformProcedure: string;
//   ConvertFunctionForParams: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {RailConfigurationId: 1, CompanyId: 1, ClientGuid: '', UserId: '1',OperationIdent: 'aaa',Data: '',IsActive: 1,Timeout: 30, TransformProcedure:'' ,ConvertFunctionForParams: '' },
//   {RailConfigurationId: 2, CompanyId: 3, ClientGuid: '', UserId: '1',OperationIdent: 'bbb',Data: '',IsActive: 1,Timeout: 30, TransformProcedure:'' ,ConvertFunctionForParams: '' },
//   {RailConfigurationId: 3, CompanyId: 2, ClientGuid: '', UserId: '1',OperationIdent: 'ccc',Data: '',IsActive: 1,Timeout: 30, TransformProcedure:'' ,ConvertFunctionForParams: '' },
// ];
@Component({
    templateUrl: 'RailConfigurations.component.html',
    styleUrls: ['RailConfigurations.component.scss']
})
export class RailConfigurationsComponent extends DictContainerComponent implements OnInit {
  displayedColumns: string[] = ['RailConfigurationId', 'CompanyId', 'ClientGuid', 'UserId', 'OperationIdent', 'Data','IsActive','Timeout','TransformProcedure','ConvertFunctionForParams'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(gatewayService: GatewayService) {
      super(gatewayService);
      this.ident = 'sitRailConfigurations';
  }

  ngOnInit() {
      super.ngOnInit();
      this.dataSource = this.getRecords('sitRailConfigurationsDS')

      //this.dataSource.sort = this.sort;
      // this.sort.direction = 'desc';
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClick(){
    const rows = this.getRecords('sitRailConfigurationsDS');

    this.dataSource = new MatTableDataSource(rows);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

}
