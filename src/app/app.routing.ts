﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';
import { MaterialTestComponent } from './containers/dictionaries/material-test';
import { AgGridTestComponent } from './containers/dictionaries/ag-grid-test';
import { testDict } from './containers/dictionaries/testDict';
import { AuthGuard } from './_helpers';
import { SideMenuComponent } from './components/side-menu'
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sitRozrachunkiInsertGT/sitRozrachunkiInsertGT.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dict', component: RailConfigurationsComponent, canActivate: [AuthGuard]},
    { path: 'material-test', component: MaterialTestComponent, canActivate: [AuthGuard]},
    { path: 'test', component: testDict, canActivate: [AuthGuard] },
    { path: 'rozrachunki', component: SitRozrachunkiInsertGTComponent, canActivate: [AuthGuard] },
    { path: 'ag-grid-test', component: AgGridTestComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
