import { Component, OnInit, ViewChild } from '@angular/core';


import { GatewayService } from '@app/_services';
import { DictContainerComponent } from '../../../components/dict-container';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';


@Component({
    templateUrl: 'RailConfigurations.component.html',
    styleUrls: ['RailConfigurations.component.scss']
})
export class RailConfigurationsComponent implements OnInit {
  displayedColumns: string[] = ['RailConfigurationId', 'CompanyId', 'ClientGuid', 'UserId', 'OperationIdent', 'Data','IsActive','Timeout','TransformProcedure','ConvertFunctionForParams'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(gatewayService: GatewayService) {
      // super(gatewayService);
      // this.ident = 'sitRailConfigurations';
  }

  ngOnInit() {
      // super.ngOnInit();
      // this.dataSource = this.getRows('sitRailConfigurationsDS')

      //this.dataSource.sort = this.sort;
      // this.sort.direction = 'desc';
  }

  applyFilter(event: Event){
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onClick(){
    // this.dataSource = new MatTableDataSource(rows);
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;

  }

}
