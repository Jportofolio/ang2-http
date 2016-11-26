
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HeroModule } from './toh/hero.module';
import {WikiModule } from './wiki/wiki.module';

// import  { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
// import { AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';

import { HttpService } from './toh/http.service';
import { HttpModule, JsonpModule, RequestOptions, XHRBackend, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { HeroListComponent } from './toh/hero-list.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component'


import { AppComponent } from './app.component';

//Creating config options (see ILocalStorageService Config)
// let localStorageServiceConfig = {
//     prefix: 'http-app',
//     storageType: 'localStorage',
//     setDefaultToCookie: true,
//     setNotify: true
// }

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule
    ],
    declarations : [AppComponent, HeroListComponent, WikiComponent, WikiSmartComponent],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
