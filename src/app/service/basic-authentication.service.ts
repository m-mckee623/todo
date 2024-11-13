import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeBasicAuthenticationService(username:string, password:string){

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(
      `http://localhost:8080/basicauth`,
      {headers}).pipe(
        map(
          data=> {
            sessionStorage.setItem('authenticateUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticateUser')
  }


  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
        return sessionStorage.getItem('token');
    return null;
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
    sessionStorage.removeItem('token')
  }
}


export class AuthenticationBean{
  constructor(public message:string){

  }
}
