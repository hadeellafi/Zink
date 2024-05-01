import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig } from '@angular/core';
import { AppRoutingProvider } from './app.routes';
import { PrefixInterceptor } from './utils/prefix.url.intercepter';

export const appConfig: ApplicationConfig = {
  providers: [
    ...AppRoutingProvider,
    provideHttpClient(
      withInterceptors([
        PrefixInterceptor
      ])
    )
    ,
  ]
};
