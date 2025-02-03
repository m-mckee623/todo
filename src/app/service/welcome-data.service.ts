import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../app.constants';

//Define just like a POJO in Java
export class WelcomeMessagePojo {
  constructor(public message:string) { }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWorldWithParameterService(name : string){

    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<WelcomeMessagePojo>(`${API_URL}/welcome-message/${name}`);
  }

}
