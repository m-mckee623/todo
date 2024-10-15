import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor() { }

  executeHelloWorldBeanService(){
    console.log("This is a log for executeHelloWorldBeanService")
  }
}
