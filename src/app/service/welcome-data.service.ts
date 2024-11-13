import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../app.constants';

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
    return this.httpClient.get<HelloWorldPojo>(`${API_URL}/hello-world-pojo`);
  }

  executeHelloWorldWithParameterService(name : string){

    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<HelloWorldPojo>(`${API_URL}/hello-world/path-variable/${name}`);
  }

}
