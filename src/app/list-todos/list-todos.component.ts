import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';

//Essentially a POJO here
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

todos = [
   new Todo(1, "Learn Angular", false, new Date()),
   new Todo(2, "Learn Java", false, new Date()),
   new Todo(1, "Get Java cert", false, new Date())
]


  constructor() {
  }
  ngOnInit() {
  }

}
