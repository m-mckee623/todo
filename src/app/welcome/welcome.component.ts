import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {HelloWorldPojo, WelcomeDataService} from '../service/welcome-data.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name = ''

  constructor(private route:ActivatedRoute,
              private welcomeService:WelcomeDataService ) {

  }

  ngOnInit() {
    //pass the param, name. Snapshot enables this.
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {

    this.welcomeService.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response: any){
    console.log(response.message);
  }
}
