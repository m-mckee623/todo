import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from "@angular/router";
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
              private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handleJwtAuthLogin() {
    this.basicAuthenticationService.executeJwtAuthenticationService(this.username, this.password)
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
