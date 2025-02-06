import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

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

  username: string | null = '';

  constructor(private route: ActivatedRoute,
              //Navigate to the todoo page when updating.
              private router: Router) {

  }

  ngOnInit() {
    //pass the param, name. Snapshot enables this.
    this.username = sessionStorage.getItem('authenticateUser');
  }


  capitalizeFirstLetter(name: string | null): string {
    if (!name) {
      return '';
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
