import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : String) {
    if(username === "Matthew" && password === "test123$"){
      return true;
    }
    else {
      return false;
    }
  }
}
