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
import { MatSliderModule} from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SitDataSetContainerComponent } from '@app/components/sit-data-set-container/sit-data-set-container.component';
import { SitNavbarComponent } from './components/sit-navbar/sit-navbar.component';
import { testDict } from './containers/sandbox/testDict';
import { LayoutModule } from '@angular/cdk/layout';
// ngx
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

//ag-grid
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

// SIT;
import { SitMenuListItemComponent } from './components/sit-menu-list-item/sit-menu-list-item.component';
import { NavService } from './_services/nav.service';
import { sitDSControlDirective, sitDataInputComponentDirective, sitDataCheckboxComponentDirective } from './_directives';
import { SitSideMenuComponent } from './components/sit-side-menu/';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitDataInputComponent } from './components/controls/sit-data-input/sit-data-input.component';
import { SitDataBaseComponent } from './components/controls/sit-data-base/sit-data-base.component';
import { sitSetDataSetDirective } from '@app/_directives/sitSetDataSetDirective';
import { NgxPdfTestComponent } from './containers/sandbox/ngx-pdf-test/ngx-pdf-test.component';
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
import { SitAgreementsEditComponent } from './containers/dictionaries/sit-kancelaria/actions/sit-agreements-edit/sit-agreements-edit.component';
import { SitCustomersEditComponent } from './containers/dictionaries/sit-customers/actions/sit-customers-edit/sit-customers-edit.component';
import { SitUserAccountChangePasswordComponent } from './containers/dictionaries/sit-user-account/actions/sit-user-account-change-password/sit-user-account-change-password.component';
import { SitParamsComponent } from './containers/dictionaries/sit-params/sit-params.component';
import { GridCheckboxRenderer } from './components/controls/grid-checkbox-renderer/grid-checkbox-renderer.component';
import { SitStocksComponent } from './containers/dictionaries/sit-stocks/sit-stocks.component';
import { SitWmsDocsComponent } from '@app/containers/dictionaries/sit-wms-docs/sit-wms-docs.component';;
import { SitRefreshButtonComponent } from './components/controls/sit-refresh-button/sit-refresh-button.component'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,

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
        NgxExtendedPdfViewerModule,

        FlexLayoutModule,

        //ag-Grid
        AgGridModule.withComponents([])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
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
        sitDSControlDirective,
        SitSideMenuComponent,
        SitRozrachunkiInsertGTComponent,
        SitMenuComponent,
        SitMenuListItemComponent,
        SitDataInputComponent,
        SitDataBaseComponent,
        NgxPdfTestComponent,
        SitKancelariaComponent,
        SitUserAccountComponent,
        SitProcButtonComponent,
        SitRefreshButtonComponent,
        SitWhiteListVATComponent ,
        SitJPKVatComponent,
        SitChangeCompanyComponent,
        SitProjectsPubComponent,
        ContentContainerDirective,
        SitRailConfigurationsEditComponent,
        SitDialogDiscardComponent,
        SitProcParamsComponent,
        SitDialogConfirmDelComponent,
        SitDataCheckboxComponent,
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
        SitStocksComponent,
        SitWmsDocsComponent
      ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        NavService,
        Title
    ],
    bootstrap: [AppComponent],
    entryComponents: [
      SitPulpitComponent,
      SitDialogDiscardComponent,
      SitDialogConfirmDelComponent,
      SitJpkVatGetDataComponent,
      SitMenuEditComponent,
      SitMenuItemsEditComponent,
      SitAgreementsEditComponent,
      SitCustomersEditComponent,
      SitUserAccountChangePasswordComponent,
      GridCheckboxRenderer,
      SitStocksComponent
    ]
})
export class AppModule { }
