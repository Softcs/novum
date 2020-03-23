import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';
import { MaterialTestComponent } from './containers/dictionaries/material-test';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dict', component: RailConfigurationsComponent, canActivate: [AuthGuard]},
    { path: 'material-test', component: MaterialTestComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
