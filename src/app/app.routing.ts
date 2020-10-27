import { SitJPKVatComponent } from './containers/dictionaries/sit-jpk-vat';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { SitRailConfigurationsComponent } from './containers/dictionaries/sit-rail-configurations';
import { SitRailConfigurationsEditComponent }
from './containers/dictionaries/sit-rail-configurations/actions/sit-rail-configurations-edit/sit-rail-configurations-edit.component';
import { testDict } from './containers/sandbox/testDict';
import { AuthGuard } from './_helpers';
import { SitMenuComponent } from './containers/dictionaries/sit-menu/';
import { SitMenuEditComponent } from './containers/dictionaries/sit-menu/actions/sit-menu-edit/';
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sit-rozrachunki-insert-gt/sit-rozrachunki-insert-gt.component';
import { SitKancelariaComponent } from './containers/dictionaries/sit-kancelaria/';
import { SitUserAccountComponent } from './containers/dictionaries/sit-user-account/';
import { SitWhiteListVATComponent } from './containers/dictionaries/sit-white-list-vat/';
import { SitChangeCompanyComponent } from './containers/sit-change-company';
import { SitProjectsPubComponent } from './containers/dictionaries/sit-projects-pub';
import { SitPulpitComponent } from './containers/sit-pulpit';
import { SitCustomersComponent } from './containers/dictionaries/sit-customers';
import { SitProductsComponent } from './containers/dictionaries/sit-products';
import { SitDocumentsComponent } from './containers/dictionaries/sit-documents';
import { SitWmsDocsComponent } from './containers/dictionaries/sit-wms-docs';
import { SitParamsComponent } from './containers/dictionaries/sit-params';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard], data: {title: 'Home'} },
    { path: 'sitPulpit', component: SitPulpitComponent, canActivate: [AuthGuard], data: {title: 'Pulpit'} },
    { path: 'login', component: LoginComponent, data: {title: 'Logowanie'} },
    { path: 'test', component: testDict, canActivate: [AuthGuard] },
    { path: 'sitMenu', component: SitMenuComponent, canActivate: [AuthGuard], data: {title: 'Definicja Menu'}},
    { path: 'sitRailConfigurations', component: SitRailConfigurationsComponent, canActivate: [AuthGuard],
            data: {title: 'Konfiguracja Rail'}},
    { path: 'sitRailConfigurationsEdit/:guid', component: SitRailConfigurationsEditComponent, canActivate: [AuthGuard],
            data: {title: 'Konfiguracja Rail - Edycja'}},
    { path: 'sitRozrachunkiInsertGT', component: SitRozrachunkiInsertGTComponent, canActivate: [AuthGuard],
            data: {title: 'Rozrachunki z InsertGT'} },
    { path: 'sitKancelaria', component: SitKancelariaComponent, canActivate: [AuthGuard], data: {title: 'Kancelaria'} },
    { path: 'sitUserAccount', component: SitUserAccountComponent, canActivate: [AuthGuard], data: {title: 'Konto użytkownika'} },
    { path: 'sitWhiteListVat', component: SitWhiteListVATComponent, canActivate: [AuthGuard], data: {title: 'Biała lista VAT'} },
    { path: 'sitJPKVat', component: SitJPKVatComponent, canActivate: [AuthGuard], data: {title: 'JPK VAT'} },
    { path: 'sitChangeCompany', component: SitChangeCompanyComponent, canActivate: [AuthGuard] },
    { path: 'sitProjectsPub', component: SitProjectsPubComponent, canActivate: [AuthGuard], data: {title: 'Projekty wydawnicze'} },
    { path: 'sitCustomers', component: SitCustomersComponent, canActivate: [AuthGuard], data: {title: 'Kontrahenci'} },
    { path: 'sitProducts', component: SitProductsComponent, canActivate: [AuthGuard], data: {title: 'Produkty'} },
    { path: 'sitDocuments', component: SitDocumentsComponent, canActivate: [AuthGuard], data: {title: 'Dokumenty'} },
    { path: 'sitWmsDocs', component: SitWmsDocsComponent, canActivate: [AuthGuard], data: {title: 'Dokumenty WMS'} },
    { path: 'sitParams', component: SitParamsComponent, canActivate: [AuthGuard], data: {title: 'Parametry'} },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
