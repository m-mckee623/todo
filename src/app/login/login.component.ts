import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  username = 'default'
  password = ''

  constructor () {}
  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username);
  }
}
