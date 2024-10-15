import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {HelloWorldPojo, WelcomeDataService} from '../service/welcome-data.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name : string = ''
  welcomeMessageFromService : string = '';

  constructor(private route:ActivatedRoute,
              private welcomeService:WelcomeDataService ) {

  }

  ngOnInit() {
    //pass the param, name. Snapshot enables this.
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {

    this.welcomeService.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: any) {
    this.welcomeMessageFromService = error.error.message;
  }
}
