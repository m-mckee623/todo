import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from "@angular/router";

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
export class LoginComponent implements OnInit{

  username = 'default'
  password = ''
  //This will be used for login error handling
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  //Dependency injection
  //Adding the router
  constructor (private router: Router) {}

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === 'default' && this.password === 'test'){
      this.invalidLogin = false
      //Using the router, we will redirect to the welcome page
      this.router.navigate(['welcome', this.username])
    }
      else {
        this.invalidLogin = true
      }
    }
  }
