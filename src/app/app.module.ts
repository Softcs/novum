import { NgxJsonViewerModule } from 'ngx-json-viewer';
import '@angular/common/locales/global/pl';

import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { SitDictContainerComponent } from './components/sit-dict-container/sit-dict-container.component';

// material

import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container/sit-data-set-container.component';
import { SitNavbarComponent } from './components/sit-navbar/sit-navbar.component';
import { testDict } from './containers/sandbox/testDict';
import { LayoutModule } from '@angular/cdk/layout';
// ng2 pdf
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
// ag-grid
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

// SIT;
import { SitDictBaseComponent } from './containers/_base/sit-dict-base/sit-dict-base.component';
import { SitMenuListItemComponent } from './components/sit-menu-list-item/sit-menu-list-item.component';
import { NavService } from './_services/nav.service';
import { sitDSControlDirective, sitDataInputComponentDirective, sitDataCheckboxComponentDirective, sitDataCheckboxlistComponentDirective } from './_directives';
import { SitSideMenuComponent } from './components/sit-side-menu/';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitDataInputComponent } from './components/controls/sit-data-input/sit-data-input.component';
import { SitDataBaseComponent } from './components/controls/sit-data-base/sit-data-base.component';
import { sitSetDataSetDirective } from '@app/_directives/sitSetDataSetDirective';
import { SitKancelariaComponent } from './containers/dictionaries/sit-kancelaria/sit-kancelaria.component';
import { SitUserAccountComponent } from './containers/dictionaries/sit-user-account/sit-user-account.component';
import { SitProcButtonComponent } from './components/controls/sit-proc-button/sit-proc-button.component';
import { SitWhiteListVATComponent } from './containers/dictionaries/sit-white-list-vat/sit-white-list-vat.component';
import { SitJPKVatComponent } from './containers/dictionaries/sit-jpk-vat/sit-jpk-vat.component';
import { SitChangeCompanyComponent } from './containers/sit-change-company/sit-change-company.component';
import { SitProjectsPubComponent } from './containers/dictionaries/sit-projects-pub/sit-projects-pub.component';
import { ContentContainerDirective } from './_directives/content-container.directive';
import { SitPulpitComponent } from './containers/sit-pulpit';
import { SitRailConfigurationsEditComponent }
    from '@app/containers/dictionaries/sit-rail-configurations/actions/sit-rail-configurations-edit/sit-rail-configurations-edit.component';
import { SitDialogDiscardComponent } from './components/sit-dialog-discard/sit-dialog-discard.component';
import { SitProcParamsComponent } from './components/sit-proc-params/sit-proc-params.component';
import { SitDialogConfirmDelComponent } from './components/sit-dialog-confirm-del/sit-dialog-confirm-del.component';
import { SitDataCheckboxComponent } from '@app/components/controls/sit-data-checkbox/sit-data-checkbox.component';
import { SitDataCheckboxlistComponent } from '@app/components/controls/sit-data-checkboxlist/sit-data-checkboxlist.component';

import { SitDataTextareaComponent } from '@app/components/controls/sit-data-textarea/sit-data-textarea.component';
import { sitDataTextareaComponentDirectiveDirective } from './_directives/sitDataTextareaComponentDirective';
import { SitDataTextareaComponentDirectiveDirective } from '@app/_directives/sit-data-textarea-component-directive.directive'
import { SitActionDirective } from '@app/_directives/sitActionDirective';
import { SitCustomersComponent } from '@app/containers/dictionaries/sit-customers/sit-customers.component';
import { SitProductsComponent } from '@app/containers/dictionaries/sit-products/sit-products.component';
import { SitDocumentsComponent } from '@app/containers/dictionaries/sit-documents/sit-documents.component';
import { TabContentComponent } from '@app/components/tab-content/tab-content.component';
import { SitProcExpanderComponent } from './components/controls/sit-proc-expander/sit-proc-expander.component';;
import { SitProcExpanderItemBodyComponent } from './components/controls/sit-proc-expander/sit-proc-expander-item-body/sit-proc-expander-item-body.component';
import { SitJpkVatGetDataComponent } from './containers/dictionaries/sit-jpk-vat/actions/sit-jpk-vat-get-data/sit-jpk-vat-get-data.component';
import { SitMenuEditComponent } from './containers/dictionaries/sit-menu/actions/sit-menu-edit/sit-menu-edit.component';
import { SitMenuItemsEditComponent } from './containers/dictionaries/sit-menu/actions/sit-menu-items-edit/sit-menu-items-edit.component';
import { SitAgreementsEditComponent } from './containers/dictionaries/sit-agreements/actions/sit-agreements-edit/sit-agreements-edit.component';
import { SitCustomersEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customers-edit/sit-customers-edit.component';
import { SitUserAccountChangePasswordComponent } from './containers/dictionaries/sit-user-account/actions/sit-user-account-change-password/sit-user-account-change-password.component';
import { SitParamsComponent } from './containers/dictionaries/sit-params/sit-params.component';
import { GridCheckboxRenderer } from './components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitWmsStocksComponent } from './containers/dictionaries/sit-wms-stocks/sit-wms-stocks.component';
import { SitWmsDocsComponent } from '@app/containers/dictionaries/sit-wms-docs/sit-wms-docs.component';
import { SitRefreshButtonComponent } from './components/controls/sit-refresh-button/sit-refresh-button.component';
import { SitFilesButtonComponent } from './components/controls/sit-files-button/sit-files-button.component';;
import { SitButtonBaseComponent } from './components/controls/sit-button-base/sit-button-base.component';
import { SitAttachmentsInsComponent } from './containers/dictionaries/_common/actions/sit-attachments-ins/sit-attachments-ins.component';
import { SitReturnsComponent } from './containers/dictionaries/sit-returns/sit-returns.component';
import { SitReturnsGetdataComponent } from './containers/dictionaries/sit-returns/actions/sit-returns-getdata/sit-returns-getdata.component';
import { SitAppUsersComponent } from './containers/dictionaries/sit-app-users/sit-app-users.component';
import { SitAppUsersEditComponent } from './containers/dictionaries/sit-app-users/actions/sit-app-users-edit/sit-app-users-edit.component';
import { SitAppUserCompaniesEditComponent } from './containers/dictionaries/sit-app-users/actions/sit-app-user-companies-edit/sit-app-user-companies-edit.component';
import { SitAppUsersSetPasswordComponent } from './containers/dictionaries/sit-app-users/actions/sit-app-users-set-password/sit-app-users-set-password.component';
import { AngularSplitModule } from 'angular-split';
import { SitParamsEditComponent } from './containers/dictionaries/sit-params/actions/sit-params-edit/sit-params-edit.component';
import { LookupService } from './_services/lookup.service';
import { SitJobsComponent } from './containers/dictionaries/sit-jobs/sit-jobs.component';
import { SitJobsEditComponent } from './containers/dictionaries/sit-jobs/actions/sit-jobs-edit/sit-jobs-edit.component';
import { SitJobStepsEditComponent } from './containers/dictionaries/sit-jobs/actions/sit-job-steps-edit/sit-job-steps-edit.component';
import { SitPdfViewerComponent } from './components/controls/sit-pdf-viewer/sit-pdf-viewer.component';
import { SitLogisticUnitsEditComponent } from './containers/dictionaries/sit-wms-stocks/actions/sit-logistic-units-edit/sit-logistic-units-edit.component';
import { SitWarehousesComponent } from './containers/dictionaries/sit-warehouses/sit-warehouses.component';
import { SitWarehousesEditComponent } from './containers/dictionaries/sit-warehouses/actions/sit-warehouses-edit/sit-warehouses-edit.component';
import { SitProjectsPubRegisterWorkTimeComponent } from './containers/dictionaries/sit-projects-pub/actions/sit-projects-pub-register-work-time/sit-projects-pub-register-work-time.component';
import { SitSysDictionariesComponent } from './containers/dictionaries/sit-sys-dictionaries/sit-sys-dictionaries.component';
import { SitSysDictionariesEditComponent } from './containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-dictionaries-edit/sit-sys-dictionaries-edit.component';
import { SitSysDatasourcesEditComponent } from './containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-datasources-edit/sit-sys-datasources-edit.component';
import { SitSysActionsEditComponent } from './containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-actions-edit/sit-sys-actions-edit.component';
import { SitRightsGroupUsersEditComponent } from './containers/dictionaries/sit-app-users-in-company/actions/sit-rights-group-users-edit/sit-rights-group-users-edit.component';
import { SitRightsComponent } from './containers/dictionaries/sit-rights/sit-rights.component';
import { SitTrackCapsDirective } from './_directives/sit-track-caps-directive.directive';
import { NgxBarcodeModule } from 'ngx-barcode';;
import { SitAgreementsTypesComponent } from './containers/dictionaries/sit-agreements-types/sit-agreements-types.component';
import { SitLocationsComponent } from './containers/dictionaries/sit-locations/sit-locations.component';
import { SitAgreementsTypesEditComponent } from './containers/dictionaries/sit-agreements-types/actions/sit-agreements-types-edit/sit-agreements-types-edit.component';
import { SitLocationsEditComponent } from './containers/dictionaries/sit-locations/actions/sit-locations-edit/sit-locations-edit.component';
import { SitRightsGroupsEditComponent } from './containers/dictionaries/sit-rights/actions/sit-rights-groups-edit/sit-rights-groups-edit.component';
import { SitImportCustomerFromImpTableComponent } from './containers/dictionaries/sit-customers/actions/sit-import-customer-from-imp-table/sit-import-customer-from-imp-table.component';
import { SitEmployeesComponent } from './containers/dictionaries/sit-employees/sit-employees.component';
import { SitPayrollsComponent } from './containers/dictionaries/sit-payrolls/sit-payrolls.component';
import { SitPayrollComponentsComponent } from './containers/dictionaries/sit-payroll-components/sit-payroll-components.component';
import { SitPayrollImportComponent } from './containers/dictionaries/sit-payrolls/actions/sit-payroll-import/sit-payroll-import.component';
import { SitProcPayrollComponentsAccountingDefEditComponent } from './containers/dictionaries/sit-payroll-components/actions/sit-proc-payroll-components-accounting-def-edit/sit-proc-payroll-components-accounting-def-edit.component';
import { SitCompanyDepartmentsComponent } from './containers/dictionaries/sit-company-departments/sit-company-departments.component';
import { SitActionsToolbarComponent } from './components/controls/sit-actions-toolbar/sit-actions-toolbar.component';
import { SitProductsUpdateWeightComponent } from './containers/dictionaries/sit-products/actions/sit-products-update-weight/sit-products-update-weight.component';;
import { SitPubDeliveryDistributionComponent } from './containers/dictionaries/sit-pub-delivery-distribution/sit-pub-delivery-distribution.component';
import { SitRailDeliveryDistrybutionImportComponent } from './containers/dictionaries/sit-pub-delivery-distribution/actions/sit-rail-delivery-distrybution-import/sit-rail-delivery-distrybution-import.component';
import { SitHRDepartmentsComponent } from './containers/dictionaries/sit-hr-departments/sit-hr-departments.component';
import { SitEmployeesSettlementsComponent } from './containers/dictionaries/sit-employees-settlements/sit-employees-settlements.component';;
import { SitRailLogComponent } from './containers/dictionaries/sit-rail-log/sit-rail-log.component'
import { SitPayrollsCalcDataImportComponent } from './containers/dictionaries/sit-employees-settlements/actions/sit-payrolls-calc-data-import/sit-payrolls-calc-data-import.component';
import { SitHRParams4InvoicingEditComponent } from './containers/dictionaries/sit-customers/actions/sit-hrparams4-invoicing-edit/sit-hrparams4-invoicing-edit.component';
import { SitPayrollComponentsEditComponent } from './containers/dictionaries/sit-payroll-components/actions/sit-payroll-components-edit/sit-payroll-components-edit.component';
import { SitHRDepartments4CustEditComponent } from './containers/dictionaries/sit-customers/actions/sit-hrdepartments4-cust-edit/sit-hrdepartments4-cust-edit.component';;
import { SitPLStatementComponent } from './containers/dictionaries/sit-plstatement/sit-plstatement.component';
import { SitRailPLStatementImportComponent } from './containers/dictionaries/sit-plstatement/actions/sit-rail-plstatement-import/sit-rail-plstatement-import.component'
;
import { SitPayrollsCalcAccountingDimEditComponent } from './containers/dictionaries/sit-payrolls/actions/sit-payrolls-calc-accounting-dim-edit/sit-payrolls-calc-accounting-dim-edit.component'
;
import { SitDataLabelComponent } from './components/controls/sit-data-label/sit-data-label.component'
;
import { SitEmployeesSettlementsCompEditComponent } from './containers/dictionaries/sit-employees-settlements/actions/sit-employees-settlements-comp-edit/sit-employees-settlements-comp-edit.component'
;
import { SitPayrollsCalcAccountingEditComponent } from './containers/dictionaries/sit-payrolls/actions/sit-payrolls-calc-accounting-edit/sit-payrolls-calc-accounting-edit.component'
;
import { SitUtilConverterFramesComponent } from './containers/dictionaries/sit-util-converter-frames/sit-util-converter-frames.component'
;
import { SitUtilProcGenConverterFrameComponent } from './containers/dictionaries/sit-util-converter-frames/actions/sit-util-proc-gen-converter-frame/sit-util-proc-gen-converter-frame.component';
import { SitStatusesComponent } from './containers/dictionaries/sit-statuses/sit-statuses.component'
import { SitCourierAddPieceToShipmentComponent } from './containers/dictionaries/sit-wms-docs/actions/sit-courier-add-piece-to-shipment/sit-courier-add-piece-to-shipment.component';
import { SitCourierCreateShipmentsComponent } from './containers/dictionaries/sit-wms-docs/actions/sit-courier-create-shipments/sit-courier-create-shipments.component';
import { SitGridCellRendererComponent } from './components/controls/sit-grid-cell-renderer/sit-grid-cell-renderer.component';
import { SitAppUsersInCompanyComponent } from './containers/dictionaries/sit-app-users-in-company/sit-app-users-in-company.component';
import { SitAppUsersInCompanyEditComponent } from './containers/dictionaries/sit-app-users-in-company/actions/sit-app-users-in-company-edit/sit-app-users-in-company-edit.component';
import { SitProductSaleStatusIntervalsEditComponent } from './containers/dictionaries/sit-products/actions/sit-product-sale-status-intervals-edit/sit-product-sale-status-intervals-edit.component';
import { SitDocumentsTypesComponent } from './containers/dictionaries/sit-documents-types/sit-documents-types.component';
import { SitDocumentsTypesEditComponent } from './containers/dictionaries/sit-documents-types/actions/sit-documents-types-edit/sit-documents-types-edit.component';
import { SitAttendanceListComponent } from './containers/dictionaries/sit-attendance-list/sit-attendance-list.component';
import { SitStatusesEditComponent } from './containers/dictionaries/sit-statuses/actions/sit-statuses-edit/sit-statuses-edit.component';
import { SitStatusValuesEditComponent } from './containers/dictionaries/sit-statuses/actions/sit-status-values-edit/sit-status-values-edit.component';
import { SitStatusValuesTransitionsEditComponent } from './containers/dictionaries/sit-statuses/actions/sit-status-values-transitions-edit/sit-status-values-transitions-edit.component';
import { SitDataRadioComponent } from './components/controls/sit-data-radio/sit-data-radio.component'; // there
import { SitCostcenter4CustEditComponent } from './containers/dictionaries/sit-customers/actions/sit-costcenter4-cust-edit/sit-costcenter4-cust-edit.component';
import { SitEmployeesSettlementsEditComponent } from './containers/dictionaries/sit-employees-settlements/actions/sit-employees-settlements-edit/sit-employees-settlements-edit.component';
import { SitStockForWarehousesAndRestGroupComponent } from './containers/dictionaries/sit-stock-for-warehouses-and-rest-group/sit-stock-for-warehouses-and-rest-group.component';
import { SitStocksComponent } from './containers/dictionaries/sit-stocks/sit-stocks.component';
import { SitReportsComponent } from './containers/dictionaries/sit-reports/sit-reports.component';
import { SitReportsEditComponent } from './containers/dictionaries/sit-reports/actions/sit-reports-edit/sit-reports-edit.component';
import { SitDocumentsTypesReportsEditComponent } from './containers/dictionaries/sit-reports/actions/sit-documents-types-reports-edit/sit-documents-types-reports-edit.component';
import { SitDictionaryReportsEditComponent } from './containers/dictionaries/sit-reports/actions/sit-dictionary-reports-edit/sit-dictionary-reports-edit.component';
import { SitSysDictionariesSynchComponent } from './containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-dictionaries-synch/sit-sys-dictionaries-synch.component';
import { SitStockForWarehousesSaleImportComponent } from './containers/dictionaries/sit-stock-for-warehouses-and-rest-group/actions/sit-stock-for-warehouses-sale-import/sit-stock-for-warehouses-sale-import.component';
import { SitUtilProcAddNewObjectEditComponent } from './containers/dictionaries/sit-util-converter-frames/actions/sit-util-proc-add-new-object-edit/sit-util-proc-add-new-object-edit.component';
import { SitUtilSqlObjectsComponent } from './containers/dictionaries/sit-util-sql-objects/sit-util-sql-objects.component';
import { SitUtilSqlObjectsEditComponent } from './containers/dictionaries/sit-util-sql-objects/actions/sit-util-sql-objects-edit/sit-util-sql-objects-edit.component';
import { SitUtilSqlAddBatches4ObjectEditComponent } from './containers/dictionaries/sit-util-sql-objects/actions/sit-util-sql-add-batches4-object-edit/sit-util-sql-add-batches4-object-edit.component';
import { SitUtilSynchCommonDataTableComponent } from './containers/dictionaries/sit-util-sql-objects/actions/sit-util-synch-common-data-table/sit-util-synch-common-data-table.component';
import { SitHRAdditions4InvoicingEditComponent } from './containers/dictionaries/sit-customers/actions/sit-hr-additions4-invoicing-edit/sit-hr-additions4-invoicing-edit.component';
import { SitSettlementsComponent } from './containers/dictionaries/sit-settlements/sit-settlements.component';
import { SitVacationRequests4UserComponent } from './containers/dictionaries/sit-vacation-requests4user/sit-vacation-requests4user.component';
import { SitVacationRequestsEditComponent } from './containers/dictionaries/sit-vacation-requests4user/actions/sit-vacation-requests-edit/sit-vacation-requests-edit.component';
import { SitHRCompanyHierarchyComponent } from './containers/dictionaries/sit-hr-company-hierarchy/sit-hr-company-hierarchy.component';
import { SitEmployeesEditComponent } from './containers/dictionaries/sit-employees/actions/sit-employees-edit/sit-employees-edit.component';
import { SitPayrollsCalcAccountingDimImportFromXLSComponent } from './containers/dictionaries/sit-payrolls/actions/sit-payrolls-calc-accounting-dim-import-from-xls/sit-payrolls-calc-accounting-dim-import-from-xls.component';
import { SitVacationRequestsComponent } from './containers/dictionaries/sit-vacation-requests/sit-vacation-requests.component';
import { SitCustomersAttachments4EmpSettDefEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customers-attachments4-emp-sett-def-edit/sit-customers-attachments4-emp-sett-def-edit.component'
import { SitPublicationsComponent } from './containers/dictionaries/sit-publications/sit-publications.component';
import { SitPublicationsEditComponent } from './containers/dictionaries/sit-publications/actions/sit-publications-edit/sit-publications-edit.component';
import { SitPublicationsFormsOfReleaseEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-publications-forms-of-release-edit/sit-publications-forms-of-release-edit.component';
import { SitPublicationsProductsEditComponent } from './containers/dictionaries/sit-publications/actions/sit-publications-products-edit/sit-publications-products-edit.component';
import { SitPublicationsAgreementsComponent } from './containers/dictionaries/sit-publications-agreements/sit-publications-agreements.component';
import { SitPublicationsAgreementsEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-publications-agreements-edit/sit-publications-agreements-edit.component';
import { SitAgreementsBenefEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-agreements-benef-edit/sit-agreements-benef-edit.component';
import { SitAgreementsPublicationsEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-agreements-publications-edit/sit-agreements-publications-edit.component';
import { SitAgreementsAdvancesEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-agreements-advances-edit/sit-agreements-advances-edit.component';
import { SitPublicationsBillingTypesComponent } from './containers/dictionaries/sit-publications-billing-types/sit-publications-billing-types.component';
import { SitPublicationsBillingTypesEditComponent } from './containers/dictionaries/sit-publications-billing-params-def/actions/sit-publications-billing-types-edit/sit-publications-billing-types-edit.component';
import { SitPublicationsBillingDefComponent } from './containers/dictionaries/sit-publications-billing-def/sit-publications-billing-def.component';
import { SitPublicationsBillingDefEditComponent } from './containers/dictionaries/sit-publications-billing-def/actions/sit-publications-billing-def-edit/sit-publications-billing-def-edit.component';
import { SitPublicationsBillingDefFormsEditComponent } from './containers/dictionaries/sit-publications-billing-def/actions/sit-publications-billing-def-forms-edit/sit-publications-billing-def-forms-edit.component';
import { SitPublicationsBillingDefThrsEditComponent } from './containers/dictionaries/sit-publications-billing-def/actions/sit-publications-billing-def-thrs-edit/sit-publications-billing-def-thrs-edit.component';
import { SitRailDnsComponent } from './containers/dictionaries/sit-rail-dns/sit-rail-dns.component';
import { SitRailDnsEditComponent } from './containers/dictionaries/sit-rail-dns/actions/sit-rail-dns-edit/sit-rail-dns-edit.component';
import { SitRoyaltiesComponent } from './containers/dictionaries/sit-royalties/sit-royalties.component';
import { SitAggrDayStockTurnoverComponent } from './containers/dictionaries/sit-aggr-day-stock-turnover/sit-aggr-day-stock-turnover.component';
import { SitAggrDaySalesComponent } from './containers/dictionaries/sit-aggr-day-sales/sit-aggr-day-sales.component';
import { SitStocksOnDateComponent } from './containers/dictionaries/sit-stocks-on-date/sit-stocks-on-date.component';
import { SitPublicationsChangeStatusEditComponent } from './containers/dictionaries/sit-publications/actions/sit-publications-change-status-edit/sit-publications-change-status-edit.component';
import { SitPubWmsDocumentsOperatorsComponent } from './containers/dictionaries/sit-pub-wms-documents-operators/sit-pub-wms-documents-operators.component';
import { SitRailWmsDocumentsOperatorsImportComponent } from './containers/dictionaries/sit-pub-wms-documents-operators/actions/sit-rail-wms-documents-operators-import/sit-rail-wms-documents-operators-import.component';
import { SitPublicationsFormsOfReleaseGroupsEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-publications-forms-of-release-groups-edit/sit-publications-forms-of-release-groups-edit.component';
import { SitAgreementsBillingTypesEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-agreements-billing-types-edit/sit-agreements-billing-types-edit.component';
import { SitRoyaltyCalcOnePublicationComponent } from './containers/dictionaries/sit-royalties/actions/sit-royalty-calc-one-publication/sit-royalty-calc-one-publication.component';
import { SitVacationRequestsCancelEditComponent } from './containers/dictionaries/sit-vacation-requests/actions/sit-vacation-requests-cancel-edit/sit-vacation-requests-cancel-edit.component';
import { SitDocumentsHeadersEditComponent } from './containers/dictionaries/sit-documents/actions/sit-documents-headers-edit/sit-documents-headers-edit.component';
import { SitDocumentsPositionsEditComponent } from './containers/dictionaries/sit-documents/actions/sit-documents-positions-edit/sit-documents-positions-edit.component';
import { SitCustomers4AgreementsEditComponent } from './containers/dictionaries/sit-kancelaria/actions/sit-customers4-agreements-edit/sit-customers4-agreements-edit.component';
import { SitMailTemplatesComponent } from './containers/dictionaries/sit-mail-templates/sit-mail-templates.component';
import { SitMailTemplatesEditComponent } from './containers/dictionaries/sit-mail-templates/actions/sit-mail-templates-edit/sit-mail-templates-edit.component';
import { SitCourierShipmentsComponent } from './containers/dictionaries/sit-courier-shipments/sit-courier-shipments.component';
import { SitVacationRequestsChangeSuperiorEditComponent } from './containers/dictionaries/sit-vacation-requests/actions/sit-vacation-requests-change-superior-edit/sit-vacation-requests-change-superior-edit.component';
import { SitPubCostAnalysisComponent } from './containers/dictionaries/sit-pub-cost-analysis/sit-pub-cost-analysis.component';
import { SitProcRailCostAnalysisImportEditComponent } from './containers/dictionaries/sit-pub-cost-analysis/actions/sit-proc-rail-cost-analysis-import-edit/sit-proc-rail-cost-analysis-import-edit.component';
import { SitEmployeeContractsEditComponent } from './containers/dictionaries/sit-employees/actions/sit-employee-contracts-edit/sit-employee-contracts-edit.component';
import { SitCourierBookCourierEditComponent } from './containers/dictionaries/sit-wms-docs/actions/sit-courier-book-courier-edit/sit-courier-book-courier-edit.component';
import { SitAgreementsChangeStatusEditComponent } from './containers/dictionaries/sit-publications-agreements/actions/sit-agreements-change-status-edit/sit-agreements-change-status-edit.component';
import { SitCustomersGroupsComponent } from './containers/dictionaries/sit-customers-groups/sit-customers-groups.component';
//import { SitHRWorkingHoursComponent } from './containers/dictionaries/sit-hr-working-hours/sit-hr-working-hours.component';
import { SitHRParamsDefComponent }      from './containers/dictionaries/sit-hr-params-def/sit-hr-params-def.component';
import { SitHRWorkingHoursEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-hrworking-hours-edit/sit-hrworking-hours-edit.component';
import { SitEmployeesContractsHRDepartmentsComponent } from './containers/dictionaries/sit-employees-contracts-hr-departments/sit-employees-contracts-hr-departments.component';
import { SitEmployeeVacationLimitsEditComponent } from './containers/dictionaries/sit-employees/actions/sit-employee-vacation-limits-edit/sit-employee-vacation-limits-edit.component';
import { SitCustomerBillingHoursComponent } from './containers/dictionaries/sit-customer-billing-hours/sit-customer-billing-hours.component';
import { SitCustomerBillingHoursEditComponent } from './containers/dictionaries/sit-customer-billing-hours/actions/sit-customer-billing-hours-edit/sit-customer-billing-hours-edit.component';
import { SitB2bProductsComponent } from './containers/dictionaries/sit-b2b-products/sit-b2b-products.component';
import { SitWmsProductsComponent } from './containers/dictionaries/sit-wms-products/sit-wms-products.component';
import { SitProductsEditComponent } from './containers/dictionaries/sit-products/actions/sit-products-edit/sit-products-edit.component';
import { SitProducts4PubEditComponent } from './containers/dictionaries/sit-products/actions/sit-products4-pub-edit/sit-products4-pub-edit.component';
import { SitHRBatches4InvoicingComponent } from './containers/dictionaries/sit-hr-batches4-invoicing/sit-hr-batches4-invoicing.component';
import { SitHRBatches4InvoicingEditComponent } from './containers/dictionaries/sit-hr-batches4-invoicing/actions/sit-hr-batches4-invoicing-edit/sit-hr-batches4-invoicing-edit.component';
import { SitUtilProcConvertUpdateFrameBodyComponent } from './containers/dictionaries/sit-util-converter-frames/actions/sit-util-proc-convert-update-frame-body/sit-util-proc-convert-update-frame-body.component';
import { SitDialogConfirmSeletedRowsComponent } from './components/sit-dialog-confirm-selected-rows';
import { SitActionsSelectedProgressComponent } from './components/controls/sit-actions-selected-progress/sit-actions-selected-progress.component';
import { SitActionsSelectedProgressItemComponent } from './components/controls/sit-actions-selected-progress/sit-actions-selected-progress-item/sit-actions-selected-progress-item.component';
import { SitProductWarehousesConfigEditComponent } from './containers/dictionaries/sit-products/actions/sit-product-warehouses-config-edit/sit-product-warehouses-config-edit.component';
import { SitAnalysisBankStatementPosComponent } from './containers/dictionaries/sit-analysis-bank-statement-pos/sit-analysis-bank-statement-pos.component';
import { SitPubPrintCostAnalysisComponent } from './containers/dictionaries/sit-pub-print-cost-analysis/sit-pub-print-cost-analysis.component';
import { SitParams4EmployeesSettlementsComponent } from './containers/dictionaries//sit-params4-employees-settlements/sit-params4-employees-settlements.component';
import { SitParams4EmployeesSettlementsEditComponent } from './containers/dictionaries/sit-params4-employees-settlements/actions/sit-params4-employees-settlements-edit/sit-params4-employees-settlements-edit.component';
import { SitDialogActionProgressComponent } from './components/sit-dialog-action-progress/sit-dialog-action-progress.component';
import { SitImportFromFileComponent } from './containers/dictionaries/_common/actions/sit-import-from-file/sit-import-from-file.component';
import { SitImportsTemplatesComponent } from './containers/dictionaries/sit-imports-templates/sit-imports-templates.component';
import { SitImportsTemplatesEditComponent } from './containers/dictionaries/sit-imports-templates/actions/sit-imports-templates-edit/sit-imports-templates-edit.component';
import { SitCustomerEDocsEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customer-edocs-edit/sit-customer-edocs-edit.component';
import { SitChangeStatusComponent } from './containers/dictionaries/_common/actions/sit-change-status/sit-change-status.component';
import { SitCustomerCreditLimitScoresComponent } from './containers/dictionaries/sit-customer-credit-limit-scores/sit-customer-credit-limit-scores.component';
import { SitCustomerCreditLimitScoresEditComponent } from './containers/dictionaries/sit-customer-credit-limit-scores/actions/sit-customer-credit-limit-scores-edit/sit-customer-credit-limit-scores-edit.component';
import { SitCustomerCreditLimitScoresGenComponent } from './containers/dictionaries/sit-customer-credit-limit-scores/actions/sit-customer-credit-limit-scores-gen/sit-customer-credit-limit-scores-gen.component';
import { SitHRParams4InvoicingContrEditComponent } from './containers/dictionaries/sit-customers/actions/sit-hrparams4-invoicing-contr-edit/sit-hrparams4-invoicing-contr-edit.component';
import { SitEmployeesSettlementsCustomerCostCenterEditComponent } from './containers/dictionaries/sit-employees-settlements/actions/sit-employees-settlements-customer-cost-center-edit/sit-employees-settlements-customer-cost-center-edit.component';
import { SitHrPfronDataImportComponent } from './containers/dictionaries/sit-employees-settlements/actions/sit-hr-pfron-data-import/sit-hr-pfron-data-import.component';
import { SitFlatsRentComponent } from './containers/dictionaries/sit-flats-rent/sit-flats-rent.component';
import { SitFlatsRentFlatsEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-flats-edit/sit-flats-rent-flats-edit.component';
import { SitFlatsRentTenancyAgreementsEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-tenancy-agreements-edit/sit-flats-rent-tenancy-agreements-edit.component';
import { SitFlatsRentTenantsEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-tenants-edit/sit-flats-rent-tenants-edit.component';
import { SitFlatsRentUtilitiesEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-utilities-edit/sit-flats-rent-utilities-edit.component';
import { SitFlatsRentUtilitiesTypesEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-utilities-types-edit/sit-flats-rent-utilities-types-edit.component';
import { SitFlatsRentUtilitiesProvidersEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-utilities-providers-edit/sit-flats-rent-utilities-providers-edit.component';
import { SitBankStatementPositionsComponent } from './containers/dictionaries/sit-bank-statement-positions/sit-bank-statement-positions.component';
import { SitFlatsRentRentPositionsEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-rent-positions-edit/sit-flats-rent-rent-positions-edit.component';
import { SitFlatsRentScheduleReceivablesEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-schedule-receivables-edit/sit-flats-rent-schedule-receivables-edit.component';
import { SitFlatsRentGenScheduleFromRentPositionsComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-gen-schedule-from-rent-positions/sit-flats-rent-gen-schedule-from-rent-positions.component';
import { SitFlatsRentMetersEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-meters-edit/sit-flats-rent-meters-edit.component';
import { SitFlatsRentMetersReadingsEditComponent } from './containers/dictionaries/sit-flats-rent/actions/sit-flats-rent-meters-readings-edit/sit-flats-rent-meters-readings-edit.component';
import { SitAcceptancePathsDefComponent } from './containers/dictionaries/sit-acceptance-paths-def/sit-acceptance-paths-def.component';
import { SitAcceptancePathsDefEditComponent } from './containers/dictionaries/sit-acceptance-paths-def/actions/sit-acceptance-paths-def-edit/sit-acceptance-paths-def-edit.component';
import { SitAcceptanceStepsDefEditComponent } from './containers/dictionaries/sit-acceptance-paths-def/actions/sit-acceptance-steps-def-edit/sit-acceptance-steps-def-edit.component';
import { SitAcceptanceStepPersonsDefEditComponent } from './containers/dictionaries/sit-acceptance-paths-def/actions/sit-acceptance-step-persons-def-edit/sit-acceptance-step-persons-def-edit.component';
import { SitAcceptanceTablesEditComponent } from './containers/dictionaries/sit-acceptance-paths-def/actions/sit-acceptance-tables-edit/sit-acceptance-tables-edit.component';
import { SitAcceptComponent } from './containers/dictionaries/_common/actions/sit-accept/sit-accept.component';
import { SitPayrollComponentsSettlementsColumnsEditComponent } from './containers/dictionaries/sit-payroll-components/actions/sit-payroll-components-settlements-columns-edit/sit-payroll-components-settlements-columns-edit.component';
import { SitCashRegisterSaleReportsComponent } from './containers/dictionaries/sit-cash-register-sale-reports/sit-cash-register-sale-reports.component';
import { SitCashRegisterSaleReportsImportComponent } from './containers/dictionaries/sit-cash-register-sale-reports/actions/sit-cash-register-sale-reports-import/sit-cash-register-sale-reports-import.component';
import { SitSimpleMethodConfigurationsEditComponent } from './containers/dictionaries/sit-rail-configurations/actions/sit-simple-method-configurations-edit/sit-simple-method-configurations-edit.component';
import { SitWsUsersEditComponent } from './containers/dictionaries/sit-rail-dns/actions/sit-ws-users-edit/sit-ws-users-edit.component';
import { SitCashRegisterSaleReportsExportComponent } from './containers/dictionaries/sit-cash-register-sale-reports/actions/sit-cash-register-sale-reports-export/sit-cash-register-sale-reports-export.component';
import { SitPublicationSubjectsEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-publication-subjects-edit/sit-publication-subjects-edit.component';
import { SitCustomerB2bProductsConfigEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customer-b2b-products-config-edit/sit-customer-b2b-products-config-edit.component';
import { SitCustomerB2bProductsEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customer-b2b-products-edit/sit-customer-b2b-products-edit.component';
import { SitPublicationAudienceEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-publication-audience-edit/sit-publication-audience-edit.component';
import { SitProduct4PubCollectionsEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-product4-pub-collections-edit/sit-product4-pub-collections-edit.component';
import { SitAbsenceReasonsEditComponent } from './containers/dictionaries/sit-hr-params-def/actions/sit-absence-reasons-edit/sit-absence-reasons-edit.component';
import { SitSysCommonDataTablesComponent } from './containers/dictionaries/sit-sys-common-data-tables/sit-sys-common-data-tables.component';
import { SitCountriesEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-countries-edit/sit-countries-edit.component';
import { SitCurrenciesEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-currencies-edit/sit-currencies-edit.component';
import { SitDocumentsLinksTypesEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-documents-links-types-edit/sit-documents-links-types-edit.component';
import { SitJobTimesEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-job-times-edit/sit-job-times-edit.component';
import { SitLanguagesEditComponent } from './containers/dictionaries/sit-sys-common-data-tables/actions/sit-languages-edit/sit-languages-edit.component';
import { SitWmsPackingComponent } from './containers/dictionaries/sit-wms-packing/sit-wms-packing.component';
import { SitWmsPackingEditComponent } from './containers/dictionaries/sit-wms-packing/actions/sit-wms-packing-edit/sit-wms-packing-edit.component';
import { SitWmsPackingDocumentsEditComponent } from './containers/dictionaries/sit-wms-packing/actions/sit-wms-packing-documents-edit/sit-wms-packing-documents-edit.component';
import { SitWmsPackingContainersEditComponent } from './containers/dictionaries/sit-wms-packing/actions/sit-wms-packing-containers-edit/sit-wms-packing-containers-edit.component';
import { SitWmsPackingContainerProductsEditComponent } from './containers/dictionaries/sit-wms-packing/actions/sit-wms-packing-container-products-edit/sit-wms-packing-container-products-edit.component';
import { SitPublicationsParamsDefComponent } from './containers/dictionaries/sit-publications-params-def/sit-publications-params-def.component';
import { SitWmsParamsDefComponent } from './containers/dictionaries/sit-wms-params-def/sit-wms-params-def.component';
import { SitWmsPackingContainersTypesEditComponent } from './containers/dictionaries/sit-wms-params-def/actions/sit-wms-packing-containers-types-edit/sit-wms-packing-containers-types-edit.component';
import { SitEmployeeAbsencesEditComponent } from './containers/dictionaries/sit-employees/actions/sit-employee-absences-edit/sit-employee-absences-edit.component';
import { SitCashRegisterSaleReportsExportForMultiComponent } from './containers/dictionaries/sit-cash-register-sale-reports/actions/sit-cash-register-sale-reports-export-for-multi/sit-cash-register-sale-reports-export-for-multi.component';
import { SitHRDepartmentsEditComponent } from './containers/dictionaries/sit-hr-params-def/actions/sit-hr-departments-edit/sit-hr-departments-edit.component';
import { SitPublicationsBillingParamsDefComponent } from './containers/dictionaries/sit-publications-billing-params-def/sit-publications-billing-params-def.component';
import { SitAgreementCustomerRolesEditComponent } from './containers/dictionaries/sit-publications-billing-params-def/actions/sit-agreement-customer-roles-edit/sit-agreement-customer-roles-edit.component';
import { SitAppUsersInCompanyAddUserComponent } from './containers/dictionaries/sit-app-users-in-company/actions/sit-app-users-in-company-add-user/sit-app-users-in-company-add-user.component';
import { SitPublicationsBillingDefCopyWithinAgreementComponent } from './containers/dictionaries/sit-publications-billing-def/actions/sit-publications-billing-def-copy-within-agreement/sit-publications-billing-def-copy-within-agreement.component';
import { SitRoyaltyCalcOnePublicationFromDateComponent } from './containers/dictionaries/sit-publications/actions/sit-royalty-calc-one-publication-from-date/sit-royalty-calc-one-publication-from-date.component';
import { SitB2cConfigComponent } from './containers/dictionaries/sit-b2c-config/sit-b2c-config.component';
import { SitB2cConfigEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-config-edit/sit-b2c-config-edit.component';
import { SitB2cProductsEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-products-edit/sit-b2c-products-edit.component';
import { SitB2cPublicationAudienceEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-publication-audience-edit/sit-b2c-publication-audience-edit.component';
import { SitB2cPublicationsFormsOfReleaseEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-publications-forms-of-release-edit/sit-b2c-publications-forms-of-release-edit.component';
import { SitB2cImprintsEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-imprints-edit/sit-b2c-imprints-edit.component';
import { SitB2cPublicationSubjectsEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-publication-subjects-edit/sit-b2c-publication-subjects-edit.component';
import { SitOfficeDocHeadersComponent } from './containers/dictionaries/sit-office-doc-headers/sit-office-doc-headers.component';
import { SitOfficeDocHeadersEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-headers-edit/sit-office-doc-headers-edit.component';
import { SitSimpleContainerComponent } from './components/sit-simple-container/sit-simple-container.component';
import { SitOfficeDocDimensionsEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-dimensions-edit/sit-office-doc-dimensions-edit.component';
import { SitOfficeDocVatFootersEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-vat-footers-edit/sit-office-doc-vat-footers-edit.component';
import { SitAgreementsComponent } from './containers/dictionaries/sit-agreements/sit-agreements.component';
import { SitAgreementCustomersEditComponent } from './containers/dictionaries/sit-agreements/actions/sit-agreement-customers-edit/sit-agreement-customers-edit.component';
import { SitAgreementUsersEditComponent } from './containers/dictionaries/sit-agreements/actions/sit-agreement-users-edit/sit-agreement-users-edit.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { SitCashFlowComponent } from './containers/dictionaries/sit-cash-flow/sit-cash-flow.component';
import { SitTransactionTypesComponent } from './containers/dictionaries/sit-transaction-types/sit-transaction-types.component';
import { SitTransactionTypesEditComponent } from './containers/dictionaries/sit-transaction-types/actions/sit-transaction-types-edit/sit-transaction-types-edit.component';
import { SitGeneralLedgerComponent } from './containers/dictionaries/sit-general-ledger/sit-general-ledger.component';
import { SitAccountingEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-accounting-edit/sit-accounting-edit.component';
import { SitFiscalYearsComponent } from './containers/dictionaries/sit-fiscal-years/sit-fiscal-years.component';
import { SitFiscalYearsEditComponent } from './containers/dictionaries/sit-fiscal-years/actions/sit-fiscal-years-edit/sit-fiscal-years-edit.component';
import { SitOfficeDocGenAccountingComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-gen-accounting/sit-office-doc-gen-accounting.component';
import { SitAggrB2bCustomersSalesDailyComponent } from './containers/dictionaries/sit-aggr-b2b-customers-sales-daily/sit-aggr-b2b-customers-sales-daily.component';
import { SitAccountingDocTypesComponent } from './containers/dictionaries/sit-accounting-doc-types/sit-accounting-doc-types.component';
import { SitAccountingDocTypesEditComponent } from './containers/dictionaries/sit-accounting-doc-types/actions/sit-accounting-doc-types-edit/sit-accounting-doc-types-edit.component';
import { SitAccountingSchemasComponent } from './containers/dictionaries/sit-accounting-schemas/sit-accounting-schemas.component';
import { SitAccountingSchemasEditComponent } from './containers/dictionaries/sit-accounting-schemas/actions/sit-accounting-schemas-edit/sit-accounting-schemas-edit.component';
import { SitVehiclesComponent } from './containers/dictionaries/sit-vehicles/sit-vehicles.component';
import { SitVehiclesEditComponent } from './containers/dictionaries/sit-vehicles/actions/sit-vehicles-edit/sit-vehicles-edit.component';
import { SitAccountingDimEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-accounting-dim-edit/sit-accounting-dim-edit.component';
import { SitAggrMonthSaleByAuthorComponent } from './containers/dictionaries/sit-aggr-month-sale-by-author/sit-aggr-month-sale-by-author.component';
import { SitContributorsComponent } from './containers/dictionaries/sit-contributors/sit-contributors.component';
import { SitContributorsEditComponent } from './containers/dictionaries/sit-contributors/actions/sit-contributors-edit/sit-contributors-edit.component';
import { SitImagesInsComponent } from './containers/dictionaries/sit-contributors/actions/sit-images-ins/sit-images-ins.component';
import { SitContributorAlternativeNamesEditComponent } from './containers/dictionaries/sit-contributors/actions/sit-contributor-alternative-names-edit/sit-contributor-alternative-names-edit.component';
import { SitContributorRolesEditComponent } from './containers/dictionaries/sit-publications-params-def/actions/sit-contributor-roles-edit/sit-contributor-roles-edit.component';
import { SitPublicationContributorsEditComponent } from './containers/dictionaries/sit-publications/actions/sit-publication-contributors-edit/sit-publication-contributors-edit.component';
import { SitProducts4pubContributorsEditComponent } from './containers/dictionaries/sit-publications/actions/sit-products4pub-contributors-edit/sit-products4pub-contributors-edit.component';
import { SitAnalysisPublishingPlanComponent } from './containers/dictionaries/sit-analysis-publishing-plan/sit-analysis-publishing-plan.component';
import { SitB2cContributorsEditComponent } from './containers/dictionaries/sit-b2c-config/actions/sit-b2c-contributors-edit/sit-b2c-contributors-edit.component';
import { SitProductSetIsB2cComponent } from './containers/dictionaries/sit-products/actions/sit-product-set-is-b2c/sit-product-set-is-b2c.component';
import { SimpleCalendarComponent } from './components/controls/simple-calendar/simple-calendar.component';
import { SitOfficeDocDimensionsImportFromFileComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-dimensions-import-from-file/sit-office-doc-dimensions-import-from-file.component';
import { SitOfficeDocDimensionsCopyFromDocComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-dimensions-copy-from-doc/sit-office-doc-dimensions-copy-from-doc.component';
import { SitMsgContainerComponent } from './components/sit-msg-container/sit-msg-container.component';
import { SitPalletsBalanceComponent } from './containers/dictionaries/sit-pallets-balance/sit-pallets-balance.component';
import { SitPalletsBalanceDocumentInsComponent } from './containers/dictionaries/sit-pallets-balance/actions/sit-pallets-balance-document-ins/sit-pallets-balance-document-ins.component';
import { SitCustomersDocumentsImportsEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customers-documents-imports-edit/sit-customers-documents-imports-edit.component';
import { SitPalletsEvidenceAddComponent } from './containers/dictionaries/sit-wms-docs/actions/sit-pallets-evidence-add/sit-pallets-evidence-add.component';
import { SitAnalysisProductsProfitabilityComponent } from './containers/dictionaries/sit-analysis-products-profitability/sit-analysis-products-profitability.component';
import { SitLinkInternalComponent } from './components/sit-link-internal/sit-link-internal.component';
import { SitAgridLinkComponent }           from './components/ag-grid/sit-agrid-link/sit-agrid-link.component';
import { SitAgridPulpitReminderComponent } from './components/ag-grid/sit-agrid-pulpit-reminder/sit-agrid-pulpit-reminder.component';
import { SitPayrollsEditComponent } from './containers/dictionaries/sit-payrolls/actions/sit-payrolls-edit/sit-payrolls-edit.component';
import { SitItelCashFlowComponent } from './containers/dictionaries/sit-itel-cash-flow/sit-itel-cash-flow.component';
import { SitSandboxComponent } from './containers/dictionaries/sit-sandbox/sit-sandbox.component';
import { SitPubSettlementsByAgeComponent } from './containers/dictionaries/sit-pub-settlements-by-age/sit-pub-settlements-by-age.component';
import { SitPubCashFlowComponent } from './containers/dictionaries/sit-pub-cash-flow/sit-pub-cash-flow.component';
import { SitBudgetsComponent } from './containers/dictionaries/sit-budgets/sit-budgets.component';
import { SitBudgetsEditComponent } from './containers/dictionaries/sit-budgets/actions/sit-budgets-edit/sit-budgets-edit.component';
import { SitPaymentsComponent } from './containers/dictionaries/sit-payments/sit-payments.component';
import { SitPaymentsAddToBankTransferComponent } from './containers/dictionaries/sit-payments/actions/sit-payments-add-to-bank-transfer/sit-payments-add-to-bank-transfer.component';
import { SitBankTransferHeadersEditComponent } from './containers/dictionaries/sit-payments/actions/sit-bank-transfer-headers-edit/sit-bank-transfer-headers-edit.component';
import { SitBankTransferPositionsEditComponent } from './containers/dictionaries/sit-payments/actions/sit-bank-transfer-positions-edit/sit-bank-transfer-positions-edit.component';
import { SitHRParams4InvoicingTabEditComponent } from './containers/dictionaries/sit-customers/actions/sit-hrparams4-invoicing-tab-edit/sit-hrparams4-invoicing-tab-edit.component';
import { SitPasswordRecoveryComponent } from './containers/sit-password-recovery/sit-password-recovery.component';
import { SitBankTransferHeadersGenFileComponent } from './containers/dictionaries/sit-payments/actions/sit-bank-transfer-headers-gen-file/sit-bank-transfer-headers-gen-file.component';
import { SitOfficeDocPositionsEditComponent } from './containers/dictionaries/sit-office-doc-headers/actions/sit-office-doc-positions-edit/sit-office-doc-positions-edit.component';
import { SitEmploymentStatsComponent } from './containers/dictionaries/sit-employment-stats/sit-employment-stats.component';
import { SitActionsFormContainerComponent } from './components/controls/sit-actions-form-container/sit-actions-form-container.component';
import { SitAccountingSchemaAccountingDocTypesEditComponent } from './containers/dictionaries/sit-accounting-schemas/actions/sit-accounting-schema-accounting-doc-types-edit/sit-accounting-schema-accounting-doc-types-edit.component';

@NgModule({
    imports: [
        NgxJsonViewerModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MatRadioModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatSidenavModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        FormsModule,
        LayoutModule,
        PdfJsViewerModule,
        FlexLayoutModule,
        //ag-Grid
        AgGridModule.withComponents([]),
        //AngularSplitModule.forRoot(),
        AngularSplitModule,
        NgxBarcodeModule,
        NgxQRCodeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SitDictBaseComponent,
        SitPulpitComponent,
        LoginComponent,
        SitRailConfigurationsComponent,
        SitDictContainerComponent,
        SitDataSetContainerComponent,
        testDict,
        SitNavbarComponent,
        sitSetDataSetDirective,
        sitDataInputComponentDirective,
        sitDataCheckboxComponentDirective,
        sitDataCheckboxlistComponentDirective,
        sitDSControlDirective,
        SitSideMenuComponent,
        SitRozrachunkiInsertGTComponent,
        SitMenuComponent,
        SitMenuListItemComponent,
        SitDataInputComponent,
        SitDataBaseComponent,
        SitKancelariaComponent,
        SitUserAccountComponent,
        SitProcButtonComponent,
        SitRefreshButtonComponent,
        SitFilesButtonComponent,
        SitWhiteListVATComponent,
        SitJPKVatComponent,
        SitChangeCompanyComponent,
        SitProjectsPubComponent,
        ContentContainerDirective,
        SitRailConfigurationsEditComponent,
        SitDialogDiscardComponent,
        SitProcParamsComponent,
        SitDialogConfirmDelComponent,
        SitDialogConfirmSeletedRowsComponent,
        SitDialogActionProgressComponent,
        SitDataCheckboxComponent,
        SitDataCheckboxlistComponent,
        SitDataTextareaComponent,
        sitDataTextareaComponentDirectiveDirective,
        SitDataTextareaComponentDirectiveDirective,
        SitActionDirective,
        SitCustomersComponent,
        SitProductsComponent,
        SitDocumentsComponent,
        TabContentComponent,
        SitProcExpanderComponent,
        SitProcExpanderItemBodyComponent,
        SitJpkVatGetDataComponent,
        SitMenuEditComponent,
        SitMenuItemsEditComponent,
        SitAgreementsEditComponent,
        SitCustomersEditComponent,
        SitUserAccountChangePasswordComponent,
        SitParamsComponent,
        GridCheckboxRenderer,
        SitWmsStocksComponent,
        SitWmsDocsComponent,
        SitButtonBaseComponent,
        SitAttachmentsInsComponent,
        SitReturnsComponent,
        SitReturnsGetdataComponent,
        SitAppUsersComponent,
        SitAppUsersEditComponent,
        SitAppUserCompaniesEditComponent,
        SitAppUsersSetPasswordComponent,
        SitParamsEditComponent,
        SitJobsComponent,
        SitJobsEditComponent,
        SitJobStepsEditComponent,
        SitPdfViewerComponent,
        SitLogisticUnitsEditComponent,
        SitLogisticUnitsEditComponent,
        SitWarehousesComponent,
        SitWarehousesEditComponent,
        SitProjectsPubRegisterWorkTimeComponent,
        SitSysDictionariesComponent,
        SitSysDictionariesEditComponent,
        SitSysDatasourcesEditComponent,
        SitSysActionsEditComponent,
        SitRightsGroupUsersEditComponent,
        SitRightsComponent,
        SitTrackCapsDirective,
        SitAgreementsTypesComponent,
        SitLocationsComponent,
        SitAgreementsTypesEditComponent,
        SitLocationsEditComponent,
        SitRightsGroupsEditComponent,
        SitImportCustomerFromImpTableComponent,
        SitEmployeesComponent,
        SitPayrollsComponent,
        SitPayrollComponentsComponent,
        SitPayrollImportComponent,
        SitProcPayrollComponentsAccountingDefEditComponent,
        SitCompanyDepartmentsComponent,
        SitActionsToolbarComponent,
        SitActionsSelectedProgressComponent,
        SitActionsSelectedProgressItemComponent,
        SitProductsUpdateWeightComponent,
        SitPubDeliveryDistributionComponent,
        SitRailDeliveryDistrybutionImportComponent,
        SitHRDepartmentsComponent,
        SitEmployeesSettlementsComponent,
        SitRailLogComponent,
        SitPayrollsCalcDataImportComponent,
        SitHRParams4InvoicingEditComponent,
        SitPayrollComponentsEditComponent,
        SitHRDepartments4CustEditComponent,
        SitPLStatementComponent,
        SitRailPLStatementImportComponent,
        SitPayrollsCalcAccountingDimEditComponent,
        SitDataLabelComponent,
        SitEmployeesSettlementsCompEditComponent,
        SitPayrollsCalcAccountingEditComponent,
        SitUtilConverterFramesComponent,
        SitUtilProcGenConverterFrameComponent,
        SitStatusesComponent,
        SitCourierAddPieceToShipmentComponent,
        SitCourierCreateShipmentsComponent,
        SitGridCellRendererComponent,
        SitAppUsersInCompanyComponent,
        SitAppUsersInCompanyEditComponent,
        SitProductSaleStatusIntervalsEditComponent,
        SitDocumentsTypesComponent,
        SitDocumentsTypesEditComponent,
        SitAttendanceListComponent,
        SitStatusesEditComponent,
        SitStatusValuesEditComponent,
        SitStatusValuesTransitionsEditComponent,
        SitDataRadioComponent,
        SitCostcenter4CustEditComponent,
        SitEmployeesSettlementsEditComponent,
        SitStockForWarehousesAndRestGroupComponent,
        SitStocksComponent,
        SitReportsComponent,
        SitReportsEditComponent,
        SitDocumentsTypesReportsEditComponent,
        SitDictionaryReportsEditComponent,
        SitSysDictionariesSynchComponent,
        SitStockForWarehousesSaleImportComponent,
        SitUtilProcAddNewObjectEditComponent,
        SitUtilSqlObjectsComponent,
        SitUtilSqlObjectsEditComponent,
        SitUtilSqlAddBatches4ObjectEditComponent,
        SitUtilSynchCommonDataTableComponent,
        SitHRAdditions4InvoicingEditComponent,
        SitSettlementsComponent,
        SitVacationRequests4UserComponent,
        SitVacationRequestsEditComponent,
        SitHRCompanyHierarchyComponent,
        SitEmployeesEditComponent,
        SitPayrollsCalcAccountingDimImportFromXLSComponent,
        SitVacationRequestsComponent,
        SitCustomersAttachments4EmpSettDefEditComponent,
        SitPublicationsComponent,
        SitPublicationsEditComponent,
        SitPublicationsFormsOfReleaseEditComponent,
        SitPublicationsProductsEditComponent,
        SitPublicationsAgreementsComponent,
        SitPublicationsAgreementsEditComponent,
        SitAgreementsBenefEditComponent,
        SitAgreementsPublicationsEditComponent,
        SitAgreementsAdvancesEditComponent,
        SitPublicationsBillingTypesComponent,
        SitPublicationsBillingTypesEditComponent,
        SitPublicationsBillingDefComponent,
        SitPublicationsBillingDefEditComponent,
        SitPublicationsBillingDefFormsEditComponent,
        SitPublicationsBillingDefThrsEditComponent,
        SitRailDnsComponent,
        SitRailDnsEditComponent,
        SitRoyaltiesComponent,
        SitAggrDayStockTurnoverComponent,
        SitAggrDaySalesComponent,
        SitStocksOnDateComponent,
        SitPublicationsChangeStatusEditComponent,
        SitPubWmsDocumentsOperatorsComponent,
        SitRailWmsDocumentsOperatorsImportComponent,
        SitPublicationsFormsOfReleaseGroupsEditComponent,
        SitAgreementsBillingTypesEditComponent,
        SitRoyaltyCalcOnePublicationComponent,
        SitVacationRequestsCancelEditComponent,
        SitDocumentsHeadersEditComponent,
        SitDocumentsPositionsEditComponent,
        SitCustomers4AgreementsEditComponent,
        SitMailTemplatesComponent,
        SitMailTemplatesEditComponent,
        SitCourierShipmentsComponent,
        SitVacationRequestsChangeSuperiorEditComponent,
        SitPubCostAnalysisComponent,
        SitProcRailCostAnalysisImportEditComponent,
        SitEmployeeContractsEditComponent,
        SitCourierBookCourierEditComponent,
        SitAgreementsChangeStatusEditComponent,
        SitCustomersGroupsComponent,
        SitHRParamsDefComponent,
        SitHRWorkingHoursEditComponent,
        SitEmployeesContractsHRDepartmentsComponent,
        SitEmployeeVacationLimitsEditComponent,
        SitCustomerBillingHoursComponent,
        SitCustomerBillingHoursEditComponent,
        SitB2bProductsComponent,
        SitWmsProductsComponent,
        SitProductsEditComponent,
        SitProducts4PubEditComponent,
        SitHRBatches4InvoicingComponent,
        SitHRBatches4InvoicingEditComponent,
        SitUtilProcConvertUpdateFrameBodyComponent,
        SitProductWarehousesConfigEditComponent,
        SitAnalysisBankStatementPosComponent,
        SitPubPrintCostAnalysisComponent,
        SitParams4EmployeesSettlementsComponent,
        SitParams4EmployeesSettlementsEditComponent,
        SitImportFromFileComponent,
        SitImportsTemplatesComponent,
        SitImportsTemplatesEditComponent,
        SitCustomerEDocsEditComponent,
        SitChangeStatusComponent,
        SitCustomerCreditLimitScoresComponent,
        SitCustomerCreditLimitScoresEditComponent,
        SitCustomerCreditLimitScoresGenComponent,
        SitHRParams4InvoicingContrEditComponent,
        SitEmployeesSettlementsCustomerCostCenterEditComponent,
        SitHrPfronDataImportComponent,
        SitFlatsRentComponent,
        SitFlatsRentFlatsEditComponent,
        SitFlatsRentTenancyAgreementsEditComponent,
        SitFlatsRentTenantsEditComponent,
        SitFlatsRentUtilitiesEditComponent,
        SitFlatsRentUtilitiesTypesEditComponent,
        SitFlatsRentUtilitiesProvidersEditComponent,
        SitBankStatementPositionsComponent,
        SitFlatsRentRentPositionsEditComponent,
        SitFlatsRentScheduleReceivablesEditComponent,
        SitFlatsRentGenScheduleFromRentPositionsComponent,
        SitFlatsRentMetersEditComponent,
        SitFlatsRentMetersReadingsEditComponent,
        SitAcceptancePathsDefComponent,
        SitAcceptancePathsDefEditComponent,
        SitAcceptanceStepsDefEditComponent,
        SitAcceptanceStepPersonsDefEditComponent,
        SitAcceptanceTablesEditComponent,
        SitAcceptComponent,
        SitPayrollComponentsSettlementsColumnsEditComponent,
        SitCashRegisterSaleReportsComponent,
        SitCashRegisterSaleReportsImportComponent,
        SitSimpleMethodConfigurationsEditComponent,
        SitWsUsersEditComponent,
        SitCashRegisterSaleReportsExportComponent,
        SitPublicationSubjectsEditComponent,
        SitCustomerB2bProductsConfigEditComponent,
        SitCustomerB2bProductsEditComponent,
        SitPublicationAudienceEditComponent,
        SitProduct4PubCollectionsEditComponent,
        SitAbsenceReasonsEditComponent,
        SitSysCommonDataTablesComponent,
        SitCountriesEditComponent,
        SitCurrenciesEditComponent,
        SitDocumentsLinksTypesEditComponent,
        SitJobTimesEditComponent,
        SitLanguagesEditComponent,
        SitWmsPackingComponent,
        SitWmsPackingEditComponent,
        SitWmsPackingDocumentsEditComponent,
        SitWmsPackingContainersEditComponent,
        SitWmsPackingContainerProductsEditComponent,
        SitPublicationsParamsDefComponent,
        SitWmsParamsDefComponent,
        SitWmsPackingContainersTypesEditComponent,
        SitEmployeeAbsencesEditComponent,
        SitCashRegisterSaleReportsExportForMultiComponent,
        SitHRDepartmentsEditComponent,
        SitPublicationsBillingParamsDefComponent,
        SitAgreementCustomerRolesEditComponent,
        SitAppUsersInCompanyAddUserComponent,
        SitPublicationsBillingDefCopyWithinAgreementComponent,
        SitRoyaltyCalcOnePublicationFromDateComponent,
        SitB2cConfigComponent,
        SitB2cConfigEditComponent,
        SitB2cProductsEditComponent,
        SitB2cPublicationAudienceEditComponent,
        SitB2cPublicationsFormsOfReleaseEditComponent,
        SitB2cImprintsEditComponent,
        SitB2cPublicationSubjectsEditComponent,
        SitOfficeDocHeadersComponent,
        SitOfficeDocHeadersEditComponent,
        SitSimpleContainerComponent,
        SitOfficeDocDimensionsEditComponent,
        SitOfficeDocVatFootersEditComponent,
        SitAgreementsComponent,
        SitAgreementCustomersEditComponent,
        SitAgreementUsersEditComponent,
        SitCashFlowComponent,
        SitTransactionTypesComponent,
        SitTransactionTypesEditComponent,
        SitGeneralLedgerComponent,
        SitAccountingEditComponent,
        SitFiscalYearsComponent,
        SitFiscalYearsEditComponent,
        SitOfficeDocGenAccountingComponent,
        SitAggrB2bCustomersSalesDailyComponent,
        SitAccountingDocTypesComponent,
        SitAccountingDocTypesEditComponent,
        SitAccountingSchemasComponent,
        SitAccountingSchemasEditComponent,
        SitVehiclesComponent,
        SitVehiclesEditComponent,
        SitAccountingDimEditComponent,
        SitAggrMonthSaleByAuthorComponent,
        SitContributorsComponent,
        SitContributorsEditComponent,
        SitImagesInsComponent,
        SitContributorAlternativeNamesEditComponent,
        SitContributorRolesEditComponent,
        SitPublicationContributorsEditComponent,
        SitProducts4pubContributorsEditComponent,
        SitAnalysisPublishingPlanComponent,
        SitB2cContributorsEditComponent,
        SitProductSetIsB2cComponent,
        SimpleCalendarComponent,
        SitOfficeDocDimensionsImportFromFileComponent,
        SitOfficeDocDimensionsCopyFromDocComponent,
        SitMsgContainerComponent,
        SitPalletsBalanceComponent,
        SitPalletsBalanceDocumentInsComponent,
        SitCustomersDocumentsImportsEditComponent,
        SitPalletsEvidenceAddComponent,
        SitAnalysisProductsProfitabilityComponent,
        SitAgridLinkComponent,
        SitLinkInternalComponent,
        SitAgridPulpitReminderComponent,
        SitPayrollsEditComponent,
        SitItelCashFlowComponent,
        SitSandboxComponent,
        SitPubSettlementsByAgeComponent,
        SitPubCashFlowComponent,
        SitBudgetsComponent,
        SitBudgetsEditComponent,
        SitPaymentsComponent,
        SitPaymentsAddToBankTransferComponent,
        SitBankTransferHeadersEditComponent,
        SitBankTransferPositionsEditComponent,
        SitHRParams4InvoicingTabEditComponent,
        SitPasswordRecoveryComponent,
        SitBankTransferHeadersGenFileComponent,
        SitOfficeDocPositionsEditComponent,
        SitEmploymentStatsComponent,
        SitActionsFormContainerComponent,
        SitAccountingSchemaAccountingDocTypesEditComponent,

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend
        fakeBackendProvider,
        NavService,
        Title,
        LookupService,
        MatTab,
        MatTabGroup
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
