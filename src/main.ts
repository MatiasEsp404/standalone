import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter, withDisabledInitialNavigation } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = []

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withDisabledInitialNavigation()),
    importProvidersFrom(HttpClientModule)
  ]
}).catch(err => console.error(err));
