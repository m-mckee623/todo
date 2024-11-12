import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username : string, password : String) {
    if(username === "username" && password === "password"){
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    else {
      return false;
    }
  }

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
            return data;
          }
        )
    );
  }

  isUserLoggedIn(){
    let user: string | null = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}


export class AuthenticationBean{
  constructor(public message:string){

  }
}
