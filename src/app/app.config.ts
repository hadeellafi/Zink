import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { AppRoutingProvider } from './app.routes';
import { DomeInterceptorFn } from './utils/http.intercepter';

export const appConfig: ApplicationConfig = {
  providers: [
    ...AppRoutingProvider,
    provideHttpClient(withInterceptors([DomeInterceptorFn])),
  ],
};
