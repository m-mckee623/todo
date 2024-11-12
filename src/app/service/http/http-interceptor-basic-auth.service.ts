import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'username';
    let password = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    httpRequest = httpRequest.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })

    return next.handle(httpRequest)
  }
}
