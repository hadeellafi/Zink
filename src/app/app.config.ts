import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { AppRoutingProvider } from './app.routes';
import { OurErrorHandler } from './utils/errorhandler';
import { DomeInterceptorFn } from './utils/http.intercepter';

export const appConfig: ApplicationConfig = {
  providers: [
    ...AppRoutingProvider,
    provideHttpClient(withInterceptors([DomeInterceptorFn])),
    { provide: ErrorHandler, useClass: OurErrorHandler }],
};
