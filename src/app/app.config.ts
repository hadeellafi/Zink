import { ApplicationConfig } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { AppRoutingProvider } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers:[AppRoutingProvider, importProvidersFrom(HttpClientModule)]
};
