import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  invalidRegistration: boolean = false;
  registrationAttempted: boolean = false;


  //Dependency injection
  //Adding the router
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {
  }

  register(username: string, password: string): void {
    this.registrationAttempted = true;

    this.hardcodedAuthenticationService.register({ username, password }).subscribe(
      response => {
        if (response.message === "User registered successfully") {
          this.errorMessage = 'Sign up successful, please navigate to the login page'
          this.username = username;
          console.log(this.username)
        }
      },
      error => {
        this.invalidRegistration = true
        this.errorMessage = 'Username already exists'
        console.log("Error")
      }
    );
  }

}
