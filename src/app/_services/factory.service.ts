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


@Injectable({ providedIn: 'root' })
export class FactoryService {
    constructor() { }

    classes = {
        sitJPKVat: SitJPKVatComponent,
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
    };

    public GetFactory(ident: string) {
        const factory = this.classes[ident];
        if (factory == null) {
            console.error(`You need to register component [${ident}]in factory service!`);
        }
        return factory;
    }
}
