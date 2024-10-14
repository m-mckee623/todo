import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : String) {
    if(username === "Matthew" && password === "test123$"){
      sessionStorage.setItem('authenticateUser', username)
      return true;
    }
    else {
      return false;
    }
  }

  isUserLoggedIn(){
    let user: string | null = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
