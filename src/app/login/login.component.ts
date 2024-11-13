import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

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

  username = 'username'
  password = 'password'
  //This will be used for login error handling
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  //Dependency injection
  //Adding the router
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) {
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

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          this.router.navigate(['welcome', this.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
        })
  }
}
