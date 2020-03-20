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
<<<<<<< .merge_file_a32444
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';
import { DataSourceContainerComponent } from './components/data-source-container/data-source-container.component';
=======
import { RailConfigurationsComponent } from './containers/dictionaries/sitRailConfigurations';;
import { NavbarComponent } from './components/navbar/navbar.component'
import { MatSliderModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> .merge_file_a19924

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
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RailConfigurationsComponent,
<<<<<<< .merge_file_a32444
        DictContainerComponent
,
        DataSourceContainerComponent
=======
        DictContainerComponent,
        NavbarComponent
>>>>>>> .merge_file_a19924
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
