import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './containers/home';
import { LoginComponent } from './containers/login';;
import { DictContainerComponent } from './components/dict-container/dict-container.component';

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

import { FormsModule } from '@angular/forms';
import { DataSourceContainerComponent, sitSetDataSourceDirective } from './components/data-source-container/data-source-container.component';
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';;
import { NavbarComponent } from './components/navbar/navbar.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTestComponent } from './containers/dictionaries/material-test/material-test.component';
import { testDict } from './containers/dictionaries/testDict';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { LayoutModule } from '@angular/cdk/layout';;
import { SitRozrachunkiInsertGTComponent } from './containers/dictionaries/sitRozrachunkiInsertGT/sitRozrachunkiInsertGT.component'

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

        FormsModule,
        LayoutModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RailConfigurationsComponent,
        DictContainerComponent,
        DataSourceContainerComponent,
        testDict,
        NavbarComponent,
        MaterialTestComponent,
        sitSetDataSourceDirective,
        SideMenuComponent
,
        SitRozrachunkiInsertGTComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
