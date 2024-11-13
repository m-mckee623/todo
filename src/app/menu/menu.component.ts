import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {NgIf} from '@angular/common';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent implements OnInit {
 // isUserLoggedIn: boolean = false;

  constructor(public basicAuthenticationService: BasicAuthenticationService){ }

  ngOnInit() {
   // this.isUserLoggedIn = this.hardcodedAuthenticationService.isUserLoggedIn();
  }

}
