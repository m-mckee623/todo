import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

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

  constructor () {}
  ngOnInit() {
  }

  handleLogin() {
    if(this.username === 'default' && this.password === 'test'){
      this.invalidLogin = false
    }
      else {
        this.invalidLogin = true
      }
    }
  }
