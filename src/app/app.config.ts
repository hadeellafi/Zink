import { ApplicationConfig } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { AppRoutingProvider } from './app.routes';
import { PreficUrlInterceptor } from './interceptor/prefix.url.intercepter';

export const appConfig: ApplicationConfig = {
  providers: [
    AppRoutingProvider,
    importProvidersFrom(HttpClientModule),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PreficUrlInterceptor,
      multi: true
    }
  ]
};
