import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from '@angular/common';
import {TodoDataService} from '../service/data/todo-data.service';

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

  todos: Todo[] = [];


  constructor(
    private todoService: TodoDataService
  ) {
  }

  ngOnInit() {
    this.todoService.retrieveAllTodos().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

}
