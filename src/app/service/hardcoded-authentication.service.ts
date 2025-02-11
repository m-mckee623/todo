import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private http: HttpClient) { }

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

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${API_URL}/login`,
      {username, password},
      {headers: {'Content-Type': 'application/json'}}
    );
  }

  register(user: any): Observable<any> {
    return this.http.post<any>(
      `${API_URL}/register`,
      user,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
