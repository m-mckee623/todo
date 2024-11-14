import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) {
    if(username === "username" && password === "password"){
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
