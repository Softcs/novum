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
import { DataSourceContainerComponent, sitSetDataSourceDirective } from './components/data-source-container/data-source-container.component';
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';;
import { NavbarComponent } from './components/navbar/navbar.component'
import { MatSliderModule, MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatSidenavModule,
        MatTableModule, MatSortModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTestComponent } from './containers/dictionaries/material-test/material-test.component';
import { testDict } from './containers/dictionaries/testDict';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        MatSliderModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatPaginatorModule
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
        //
        sitSetDataSourceDirective
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
