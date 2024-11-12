import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

//Define just like a POJO in Java
export class HelloWorldPojo {
  constructor(public message:string) { }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<HelloWorldPojo>('http://localhost:8080/hello-world-pojo');
  }

  executeHelloWorldWithParameterService(name : string){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })

    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<HelloWorldPojo>(`http://localhost:8080/hello-world/path-variable/${name}`,
      {headers});
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'username';
    let password = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}
