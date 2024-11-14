import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpInterceptorBasicAuthService} from './service/http/http-interceptor-basic-auth.service';
import {FormsModule} from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), FormsModule
    ,{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorBasicAuthService,
    multi:true
  },
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi())]
};
