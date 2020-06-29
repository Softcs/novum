import { SitJPKVatComponent } from './containers/dictionaries/sit-jpk-vat';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { SitRailConfigurationsEditComponent } from './containers/dictionaries/sit-rail-configurations/actions/sit-rail-configurations-edit/sit-rail-configurations-edit.component';
import { MaterialTestComponent } from './containers/sandbox/material-test';
import { testDict } from './containers/sandbox/testDict';
import { AuthGuard } from './_helpers';
import { PrimeNgTestComponent } from './containers/sandbox/prime-ng-test/prime-ng-test.component';
import { NgxDatatableTestComponent } from './containers/sandbox/ngx-datatable-test';
import { NgxPdfTestComponent } from './containers/sandbox/ngx-pdf-test';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitKancelariaComponent } from './containers/dictionaries/sit-kancelaria/';
import { SitUserAccountComponent } from './containers/dictionaries/sit-user-account/';
import { SitWhiteListVATComponent } from './containers/dictionaries/sit-white-list-vat/';
import { SitChangeCompanyComponent } from './containers/sit-change-company';
import { SitProjectsPubComponent } from './containers/dictionaries/sit-projects-pub';
import { SitPulpitComponent } from './containers/sit-pulpit';

const routes: Routes = [
    { path: '', component: SitPulpitComponent, canActivate: [AuthGuard], data: {title: 'Pulpit'} },
    { path: 'sitPulpit', component: SitPulpitComponent, canActivate: [AuthGuard], data: {title: 'Pulpit'} },
    { path: 'login', component: LoginComponent, data: {title: 'Logowanie'} },
    { path: 'material-test', component: MaterialTestComponent, canActivate: [AuthGuard]},
    { path: 'test', component: testDict, canActivate: [AuthGuard] },
    { path: 'prime-ng-test', component: PrimeNgTestComponent, canActivate: [AuthGuard]},
    { path: 'ngx-datatable-test', component: NgxDatatableTestComponent, canActivate: [AuthGuard]},
    { path: 'sitMenu', component: SitMenuComponent, canActivate: [AuthGuard], data: {title: 'Definicja Menu'}},
    { path: 'sitRailConfigurations', component: SitRailConfigurationsComponent, canActivate: [AuthGuard],
            data: {title: 'Konfiguracja Rail'}},
    { path: 'sitRailConfigurationsEdit/:guid', component: SitRailConfigurationsEditComponent, canActivate: [AuthGuard],
            data: {title: 'Konfiguracja Rail - Edycja'}},
    { path: 'sitRozrachunkiInsertGT', component: SitRozrachunkiInsertGTComponent, canActivate: [AuthGuard],
            data: {title: 'Rozrachunki z InsertGT'} },
    { path: 'ngx-extended-pdf-viewer-test', component: NgxPdfTestComponent, canActivate: [AuthGuard] },
    { path: 'sitKancelaria', component: SitKancelariaComponent, canActivate: [AuthGuard], data: {title: 'Kancelaria'} },
    { path: 'sitUserAccount', component: SitUserAccountComponent, canActivate: [AuthGuard], data: {title: 'Konto użytkownika'} },
    { path: 'sitWhiteListVat', component: SitWhiteListVATComponent, canActivate: [AuthGuard], data: {title: 'Biała lista VAT'} },
    { path: 'sitJPKVat', component: SitJPKVatComponent, canActivate: [AuthGuard], data: {title: 'JPK VAT'} },
    { path: 'sitChangeCompany', component: SitChangeCompanyComponent, canActivate: [AuthGuard] },
    { path: 'sitProjectsPub', component: SitProjectsPubComponent, canActivate: [AuthGuard], data: {title: 'Projekty wydawnicze'} },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
