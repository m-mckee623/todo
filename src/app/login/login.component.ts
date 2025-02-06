import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user: any;
  message: string = ''
  username: string = ''
  password: string = ''
  //This will be used for login error handling
  errorMessage = 'Invalid credentials'
  invalidLogin = false


  //Dependency injection
  //Adding the router
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {

    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.invalidLogin = false
      //Using the router, we will redirect to the welcome page
      this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true
    }
  }

  login(username: string, password: string): void {
    this.hardcodedAuthenticationService.login(username, password).subscribe(
      response => {
        this.message = response.message;
        console.log(this.message)
        if (response.username) {
          this.username = response.username;
          console.log(this.username)
          this.invalidLogin = false
          //Using the router, we will redirect to the welcome page
          sessionStorage.setItem('authenticateUser', this.username)
          this.router.navigate(['welcome', this.username])
        }
      },
      error => {
        this.message = 'Invalid username or password';
        this.invalidLogin = true
      }
    );
  }
}
