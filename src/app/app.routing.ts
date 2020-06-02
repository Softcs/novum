import { SitJPKVatComponent } from './containers/dictionaries/sit-jpk-vat';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { MaterialTestComponent } from './containers/sandbox/material-test';
import { testDict } from './containers/sandbox/testDict';
import { AuthGuard } from './_helpers';
import { AgGridTestComponent } from './containers/sandbox/ag-grid-test';
import { PrimeNgTestComponent } from './containers/sandbox/prime-ng-test/prime-ng-test.component';
import { NgxDatatableTestComponent } from './containers/sandbox/ngx-datatable-test';
import { NgxPdfTestComponent } from './containers/sandbox/ngx-pdf-test';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitKancelariaComponent } from './containers/dictionaries/sit-kancelaria/';
import { SitUserAccountComponent } from './containers/dictionaries/sit-user-account/';
import { SitWhiteListVATComponent } from './containers/dictionaries/sit-white-list-vat/';
import { SitChangeCompanyComponent } from './containers/sit-change-company';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'material-test', component: MaterialTestComponent, canActivate: [AuthGuard]},
    { path: 'test', component: testDict, canActivate: [AuthGuard] },
    { path: 'ag-grid-test', component: AgGridTestComponent, canActivate: [AuthGuard]},
    { path: 'prime-ng-test', component: PrimeNgTestComponent, canActivate: [AuthGuard]},
    { path: 'ngx-datatable-test', component: NgxDatatableTestComponent, canActivate: [AuthGuard]},
    { path: 'sitMenu', component: SitMenuComponent, canActivate: [AuthGuard]},
    { path: 'sitRailConfigurations', component: SitRailConfigurationsComponent, canActivate: [AuthGuard]},
    { path: 'sitRozrachunkiInsertGT', component: SitRozrachunkiInsertGTComponent, canActivate: [AuthGuard] },
    { path: 'ngx-extended-pdf-viewer-test', component: NgxPdfTestComponent, canActivate: [AuthGuard] },
    { path: 'sitKancelaria', component: SitKancelariaComponent, canActivate: [AuthGuard] },
    { path: 'sitUserAccount', component: SitUserAccountComponent, canActivate: [AuthGuard] },
    { path: 'sitWhiteListVat', component: SitWhiteListVATComponent, canActivate: [AuthGuard] },
    { path: 'sitJPKVAT', component: SitJPKVatComponent, canActivate: [AuthGuard] },
    { path: 'sitChangeCompany', component: SitChangeCompanyComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
