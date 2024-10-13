import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

todos = [
   {id: 1, description: 'Learn Angular'},
   {id: 2, description: 'Learn Java'},
   {id: 3, description: 'Learn Spring boot'}
]


  constructor() {
  }
  ngOnInit() {
  }

}
