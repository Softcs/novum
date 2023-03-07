import { Component } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-analysis-publishig-plan',
  templateUrl: './sit-analysis-publishig-plan.component.html',
  styleUrls: ['./sit-analysis-publishig-plan.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAnalysisPublishigPlanComponent extends SitDictBaseComponent {
  
  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitPublishigPlan"] = [
      { headerName: 'Projekt', field: 'ProjectIdent', width: 140},
      { headerName: 'Tytuł', field: 'ProductName', width: 200, tooltipField: 'Title'},
      { headerName: 'Autor', field: 'Author', width: 150},
      { headerName: 'Data premiery', field: 'PremiereDate', width: 100, renderType: 'date', suppressMenu: true },
      { headerName: 'Data wydania', field: 'ReleaseDatePlan', width: 100, renderType: 'date', suppressMenu: true },
      { headerName: 'Status', field: 'ProjectStatusDesc', width: 90},
      { headerName: 'Nakład', field: 'Circulation', width: 90, suppressMenu: true},
      { headerName: 'Ilość stron', field: 'NumberOfPages', width: 90, suppressMenu: true},
      { headerName: 'Cena okładkowa', field: 'CoverPrice', filter: 'agNumberColumnFilter', type: 'numericColumn', width: 100,
        renderType: "number", renderFormat: '1.2-2', suppressMenu: true},
      { headerName: 'Segment', field: 'Segment', width: 90},
      { headerName: 'Manager', field: 'Manager', width: 150},
      { headerName: 'Wydawnictwo', field: 'ProductsTypeDesc', width: 150},
    ]
  }
}
