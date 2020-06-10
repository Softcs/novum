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

import { SitDataSourceContainerComponent } from './components/sit-data-source-container/sit-data-source-container.component';
import { SitNavbarComponent } from './components/sit-navbar/sit-navbar.component';
import { MaterialTestComponent } from './containers/sandbox/material-test/material-test.component';
import { testDict } from './containers/sandbox/testDict';
import { LayoutModule } from '@angular/cdk/layout';
import { AgGridTestComponent } from './containers/sandbox/ag-grid-test/ag-grid-test.component';
import { AgGridModule } from 'ag-grid-angular';

// primeng
import { PrimeNgTestComponent } from './containers/sandbox/prime-ng-test/prime-ng-test.component';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';

// ngx
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDatatableTestComponent } from './containers/sandbox/ngx-datatable-test/ngx-datatable-test.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

// SIT;
import { SitMenuListItemComponent } from './components/sit-menu-list-item/sit-menu-list-item.component';
import { NavService } from './_services/nav.service';
import { sitDSControlDirective, sitDataInputComponentDirective } from './_directives';
import { SitSideMenuComponent } from './components/sit-side-menu/';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitDataInputComponent } from './components/controls/sit-data-input/sit-data-input.component';
import { SitDataBaseComponent } from './components/controls/sit-data-base/sit-data-base.component';
import { SitDataTableComponent } from './components/controls/sit-data-table/sit-data-table.component';
import { sitSetDataSourceDirective } from './_directives/sitSetDataSourceDirective';
import { NgxPdfTestComponent } from './containers/sandbox/ngx-pdf-test/ngx-pdf-test.component';
import { SitKancelariaComponent } from './containers/dictionaries/sit-kancelaria/sit-kancelaria.component';
import { SitUserAccountComponent } from './containers/dictionaries/sit-user-account/sit-user-account.component';
import { SitProcButtonComponent } from './components/controls/sit-proc-button/sit-proc-button.component';
import { SitWhiteListVATComponent } from './containers/dictionaries/sit-white-list-vat/sit-white-list-vat.component';
import { SitJPKVatComponent } from './containers/dictionaries/sit-jpk-vat/sit-jpk-vat.component';
import { SitChangeCompanyComponent } from './containers/sit-change-company/sit-change-company.component';
import { SitProjectsPubComponent } from './containers/dictionaries/sit-projects-pub/sit-projects-pub.component';
import { TabContentComponent } from './components/tab-content/tab-content.component';
import { ContentContainerDirective } from './_directives/content-container.directive';
import { SitPulpitComponent } from './containers/sit-pulpit';
import { SitRailConfigurationsEditComponent } from './containers/dictionaries/sit-rail-configurations-edit/sit-rail-configurations-edit.component'

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

        AgGridModule.withComponents([]),

        // PrimeNG
        TableModule,
        TabViewModule,
        DropdownModule,
        MultiSelectModule,
        SliderModule,
        // AccordionModule,
        // PanelModule,
        // ButtonModule,
        // RadioButtonModule

        // NGX
        NgxDatatableModule,
        NgxExtendedPdfViewerModule,

        FlexLayoutModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        SitPulpitComponent,
        LoginComponent,
        SitRailConfigurationsComponent,
        SitDictContainerComponent,
        SitDataSourceContainerComponent,
        testDict,
        SitNavbarComponent,
        MaterialTestComponent,
        sitSetDataSourceDirective,
        sitDataInputComponentDirective,
        sitDSControlDirective,
        SitSideMenuComponent,
        SitRozrachunkiInsertGTComponent,
        AgGridTestComponent,
        PrimeNgTestComponent,
        NgxDatatableTestComponent,
        SitMenuComponent,
        SitMenuListItemComponent,
        SitDataInputComponent,
        SitDataBaseComponent,
        SitDataTableComponent,
        NgxPdfTestComponent,
        SitKancelariaComponent,
        SitUserAccountComponent,
        SitProcButtonComponent,
        SitWhiteListVATComponent ,
        SitJPKVatComponent,
        SitChangeCompanyComponent,
        SitProjectsPubComponent,
        TabContentComponent,
        ContentContainerDirective,
        SitRailConfigurationsEditComponent,

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
      SitRailConfigurationsEditComponent
    ]
})
export class AppModule { }
