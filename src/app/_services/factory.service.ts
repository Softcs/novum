import { SitProcPayrollComponentsAccountingDefEditComponent } from './../containers/dictionaries/sit-payroll-components/actions/sit-proc-payroll-components-accounting-def-edit/sit-proc-payroll-components-accounting-def-edit.component';
import { SitPayrollImportComponent } from './../containers/dictionaries/sit-payrolls/actions/sit-payroll-import/sit-payroll-import.component';
import { SitPayrollComponentsComponent } from './../containers/dictionaries/sit-payroll-components/sit-payroll-components.component';
import { SitPayrollsComponent } from './../containers/dictionaries/sit-payrolls/sit-payrolls.component';
import { SitEmployeesComponent } from './../containers/dictionaries/sit-employees/sit-employees.component';
import { SitImportCustomerFromImpTableComponent } from './../containers/dictionaries/sit-kancelaria/actions/sit-import-customer-from-imp-table/sit-import-customer-from-imp-table.component';
import { SitLocationsEditComponent } from './../containers/dictionaries/sit-locations/actions/sit-locations-edit/sit-locations-edit.component';
import { SitAgreementsTypesEditComponent } from './../containers/dictionaries/sit-agreements-types/actions/sit-agreements-types-edit/sit-agreements-types-edit.component';
import { SitLocationsComponent } from './../containers/dictionaries/sit-locations/sit-locations.component';
import { SitAgreementsTypesComponent } from './../containers/dictionaries/sit-agreements-types/sit-agreements-types.component';
import { SitRightsComponent } from './../containers/dictionaries/sit-rights/sit-rights.component';
import { SitRightsGroupUsersEditComponent } from './../containers/dictionaries/sit-app-users/actions/sit-rights-group-users-edit/sit-rights-group-users-edit.component';
import { SitSysActionsEditComponent } from '../containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-actions-edit/sit-sys-actions-edit.component';
import { SitSysDatasourcesEditComponent } from './../containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-datasources-edit/sit-sys-datasources-edit.component';
import { SitSysDictionariesEditComponent } from './../containers/dictionaries/sit-sys-dictionaries/actions/sit-sys-dictionaries-edit/sit-sys-dictionaries-edit.component';
import { SitSysDictionariesComponent } from './../containers/dictionaries/sit-sys-dictionaries/sit-sys-dictionaries.component';
import { SitProjectsPubRegisterWorkTimeComponent } from './../containers/dictionaries/sit-projects-pub/actions/sit-projects-pub-register-work-time/sit-projects-pub-register-work-time.component';
import { SitWarehousesEditComponent } from './../containers/dictionaries/sit-warehouses/actions/sit-warehouses-edit/sit-warehouses-edit.component';
import { SitWarehousesComponent } from './../containers/dictionaries/sit-warehouses/sit-warehouses.component';
import { SitLogisticUnitsEditComponent } from './../containers/dictionaries/sit-stocks/actions/sit-logistic-units-edit/sit-logistic-units-edit.component';
import { SitJobStepsEditComponent } from './../containers/dictionaries/sit-jobs/actions/sit-job-steps-edit/sit-job-steps-edit.component';
import { SitJobsEditComponent } from './../containers/dictionaries/sit-jobs/actions/sit-jobs-edit/sit-jobs-edit.component';
import { SitJobsComponent } from './../containers/dictionaries/sit-jobs/sit-jobs.component';
import { SitParamsEditComponent } from './../containers/dictionaries/sit-params/actions/sit-params-edit/sit-params-edit.component';
import { SitAppUsersSetPasswordComponent } from './../containers/dictionaries/sit-app-users/actions/sit-app-users-set-password/sit-app-users-set-password.component';
import { SitAppUsersEditComponent } from './../containers/dictionaries/sit-app-users/actions/sit-app-users-edit/sit-app-users-edit.component';
import { SitAppUsersComponent } from './../containers/dictionaries/sit-app-users/sit-app-users.component';
import { SitReturnsGetdataComponent } from './../containers/dictionaries/sit-returns/actions/sit-returns-getdata/sit-returns-getdata.component';
import { SitReturnsComponent } from './../containers/dictionaries/sit-returns/sit-returns.component';
import { SitAttachmentsInsComponent } from './../containers/dictionaries/sit-kancelaria/actions/sit-attachments-ins/sit-attachments-ins.component';
import { SitStocksComponent } from './../containers/dictionaries/sit-stocks/sit-stocks.component';
import { SitParamsComponent } from './../containers/dictionaries/sit-params/sit-params.component';
import { SitUserAccountChangePasswordComponent } from './../containers/dictionaries/sit-user-account/actions/sit-user-account-change-password/sit-user-account-change-password.component';
import { SitCustomersEditComponent } from './../containers/dictionaries/sit-customers/actions/sit-customers-edit/sit-customers-edit.component';
import { SitAgreementsEditComponent } from './../containers/dictionaries/sit-kancelaria/actions/sit-agreements-edit/sit-agreements-edit.component';
import { SitJpkVatGetDataComponent } from './../containers/dictionaries/sit-jpk-vat/actions/sit-jpk-vat-get-data/sit-jpk-vat-get-data.component';
import { Injectable, Type } from '@angular/core';
import { SitJPKVatComponent } from '@app/containers/dictionaries/sit-jpk-vat';
import { SitKancelariaComponent } from '@app/containers/dictionaries/sit-kancelaria';
import { SitMenuComponent } from '@app/containers/dictionaries/sit-menu';
import { SitMenuEditComponent } from '@app/containers/dictionaries/sit-menu/actions/sit-menu-edit';
import { SitMenuItemsEditComponent } from '@app/containers/dictionaries/sit-menu/actions/sit-menu-items-edit';
import { SitProjectsPubComponent } from '@app/containers/dictionaries/sit-projects-pub';
import { SitRailConfigurationsComponent } from '@app/containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from '@app/containers/dictionaries/sit-rozrachunki-insert-gt';
import { SitUserAccountComponent } from '@app/containers/dictionaries/sit-user-account';
import { SitWhiteListVATComponent } from '@app/containers/dictionaries/sit-white-list-vat';
import { SitCustomersComponent } from '@app/containers/dictionaries/sit-customers';
import { SitProductsComponent } from '@app/containers/dictionaries/sit-products';
import { SitDocumentsComponent } from '@app/containers/dictionaries/sit-documents';
import { SitRailConfigurationsEditComponent } from
'@app/containers/dictionaries/sit-rail-configurations/actions/sit-rail-configurations-edit';
import { SitWmsDocsComponent } from '@app/containers/dictionaries/sit-wms-docs';
import { SitAppUserCompaniesEditComponent } from '@app/containers/dictionaries/sit-app-users/actions/sit-app-user-companies-edit';
import { SitRightsGroupsEditComponent } from '@app/containers/dictionaries/sit-rights/actions/sit-rights-groups-edit/sit-rights-groups-edit.component';


@Injectable({ providedIn: 'root' })
export class FactoryService {
    constructor() { }

    classes = {
        sitJpkVat: SitJPKVatComponent,
        sitKancelaria: SitKancelariaComponent,
        sitMenu: SitMenuComponent,
        sitMenuEdit: SitMenuEditComponent,
        sitMenuItemsEdit: SitMenuItemsEditComponent,
        sitProjectsPub: SitProjectsPubComponent,
        sitRailConfigurations: SitRailConfigurationsComponent,
        sitRozrachunkiInsertGT: SitRozrachunkiInsertGTComponent,
        sitUserAccount: SitUserAccountComponent,
        sitWhiteListVat: SitWhiteListVATComponent,
        sitCustomers: SitCustomersComponent,
        sitProducts: SitProductsComponent,
        sitDocuments: SitDocumentsComponent,
        sitRailConfigurationsEdit: SitRailConfigurationsEditComponent,
        sitJpkVatGetData: SitJpkVatGetDataComponent,
        sitAgreementsEdit: SitAgreementsEditComponent,
        sitCustomersEdit: SitCustomersEditComponent,
        sitUserAccoutChangePassword: SitUserAccountChangePasswordComponent,
        sitParams: SitParamsComponent,
        sitParamsEdit: SitParamsEditComponent,
        sitStocks: SitStocksComponent,
        sitWmsDocs: SitWmsDocsComponent,
        sitAttachmentsIns: SitAttachmentsInsComponent,
        sitReturns: SitReturnsComponent,
        sitReturnsGetData: SitReturnsGetdataComponent,
        sitAppUsers: SitAppUsersComponent,
        sitAppUsersEdit: SitAppUsersEditComponent,
        sitAppUserCompaniesEdit: SitAppUserCompaniesEditComponent,
        sitAppUsersSetPassword: SitAppUsersSetPasswordComponent,
        sitJobs: SitJobsComponent,
        sitJobsEdit: SitJobsEditComponent,
        sitJobStepsEdit: SitJobStepsEditComponent,
        sitLogisticUnitsEdit: SitLogisticUnitsEditComponent,
        sitWarehouses: SitWarehousesComponent,
        sitWarehousesEdit: SitWarehousesEditComponent,
        sitProjectsPubRegisterWorkTimeEdit: SitProjectsPubRegisterWorkTimeComponent,
        sitSysDictionaries: SitSysDictionariesComponent,
        sitSysDictionariesEdit: SitSysDictionariesEditComponent,
        sitSysDatasourcesEdit: SitSysDatasourcesEditComponent,
        sitSysActionsEdit: SitSysActionsEditComponent,
        sitRightsGroupUsersEdit: SitRightsGroupUsersEditComponent,
        sitRights: SitRightsComponent,
        sitAgreementsTypes: SitAgreementsTypesComponent,
        sitAgreementsTypesEdit: SitAgreementsTypesEditComponent,
        sitLocations: SitLocationsComponent,
        sitLocationsEdit: SitLocationsEditComponent,
        sitRightsGroupsEdit: SitRightsGroupsEditComponent,
        sitImportCustomerFromImpTable: SitImportCustomerFromImpTableComponent,
        sitEmployees: SitEmployeesComponent,
        sitPayrolls: SitPayrollsComponent,
        sitPayrollComponents: SitPayrollComponentsComponent,
        sitPayrollImport: SitPayrollImportComponent,
        sitProcPayrollComponentsAccountingDefEdit: SitProcPayrollComponentsAccountingDefEditComponent
    };

    public GetFactory(ident: string) {
        const factory = this.classes[ident];
        if (factory == null) {
            console.error(`You need to register component [${ident}]in factory service!`);
        }
        return factory;
    }
}
