import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  message = 'Welcome to the app, '
  name = ''

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {
    //pass the param, name. Snapshot enables this.
    this.name = this.route.snapshot.params['name']
  }
}
