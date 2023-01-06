import { Component,  } from '@angular/core';
import { SitDictBaseComponent } from '@app/containers/_base/sit-dict-base/sit-dict-base.component';

@Component({
  selector: 'app-sit-acceptance-paths-def',
  templateUrl: './sit-acceptance-paths-def.component.html',
  styleUrls: ['./sit-acceptance-paths-def.component.scss'],
  host: {class: 'router-flex'}
})
export class SitAcceptancePathsDefComponent extends SitDictBaseComponent {

  public prepareColumnsDefinitnion() {
    this.gridColumnsDefinition["sitAcceptancePathsDef"] = [
      { headerName: 'Id', field: 'sitAcceptancePathsDefId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptancePathsDefG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AcceptancePathIdent', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Nazwa', field: 'AcceptancePathName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Opis', field: 'AcceptancePathDesc', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Szablon maila', field: 'MailTemplateIdent', filter: 'agTextColumnFilter', width: 200 },
    ];

    this.gridColumnsDefinition["sitAcceptanceTables"] = [
      { headerName: 'Id', field: 'sitAcceptanceTablesId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptanceTablesG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Tabela', field: 'TableName', filter: 'agTextColumnFilter', width: 300 },
      { headerName: 'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80,renderType: "checkbox", cellClass: "grid-cell-centered" },
    ];

    this.gridColumnsDefinition["sitAcceptanceStepsDef"] = [
      { headerName: 'Id', field: 'sitAcceptanceStepsDefId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptanceStepsDefG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Identyfikator', field: 'AcceptanceStepIdent', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Nazwa', field: 'AcceptanceStepName', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Kol', headerTooltip:'Kolejność kroku', field: 'StepOrder', type: 'numericColumn', filter: 'agTextColumnFilter', width: 60, sort: 'asc' },
      { headerName: 'Źródło osób akceptujących', field: 'AcceptingPersonSourceDesc', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Warunek generacji kroku', field: 'StepGenCondition', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Funkcja sprawdzająca przed akceptacją', field: 'AcceptCheckFunction', filter: 'agTextColumnFilter', width: 200 },
      { headerName: 'Stat. to', headerTooltip:'Wartość statusu Main tabeli ustawiona po akceptacji kroku', field: 'MainStatusValueIdentTo', filter: 'agTextColumnFilter', width: 80 },
      { headerName: 'Edycja', field: 'CanEdit', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80,renderType: "checkbox", cellClass: "grid-cell-centered" },
      { headerName: 'Wyślij maila', headerTooltip:'Wysyłaj maile przy generacji kroku', field: 'SendMailOnGenStep', filter: 'agSetColumnFilter',  suppressMenu: true, width: 80,renderType: "checkbox", cellClass: "grid-cell-centered" },
    ];

    this.gridColumnsDefinition["sitAcceptanceStepPersonsDef"] = [
      { headerName: 'Id', field: 'sitAcceptanceStepPersonsDefId', type: 'numericColumn', filter: 'agTextColumnFilter', width: 50, defaultVisibility: false },
      { headerName: 'GUID', field: 'sitAcceptanceStepPersonsDefG', filter: 'agTextColumnFilter', width: 100, defaultVisibility: false },
      { headerName: 'Pracownik', field: 'EmployeeName', filter: 'agTextColumnFilter', width: 150 },
      { headerName: 'Akt.', headerTooltip:'Aktywny', field: 'IsActive', filter: 'agSetColumnFilter',  suppressMenu: true, width: 60,renderType: "checkbox", cellClass: "grid-cell-centered" },
      { headerName: 'Wym.', headerTooltip:'Wymagany', field: 'IsRequired', filter: 'agSetColumnFilter',  suppressMenu: true, width: 60,renderType: "checkbox", cellClass: "grid-cell-centered" },
      { headerName: 'No m.', headerTooltip:'Nie wysyłaj maila przy generacji kroku', field: 'NotSendMailOnGenStep', filter: 'agSetColumnFilter',  suppressMenu: true, width: 60,renderType: "checkbox", cellClass: "grid-cell-centered" },
    ];
  }
}

