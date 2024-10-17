import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

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
    DatePipe,
    NgIf
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  notificationMessage : string = '';


  constructor(
    private todoService: TodoDataService,
    //To be used for routing to update a todoo
    private router: Router
  ) {
  }

  ngOnInit() {
    this.retrieveTodos();
  }

  //Moved this out to a method. Not great possibly performance wise but for this, we can use for the meantime.
  retrieveTodos(){
    this.todoService.retrieveAllTodos().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  //This method takes the id of the id. It calls the data service.
  deleteTodo(id: number) {
    console.log('Delete todo id', id);
    this.todoService.deleteTodo(id).subscribe(
      response => {
        this.notificationMessage = `Todo, ${id}, deleted successfully.`;
        this.retrieveTodos();
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos',id]);
  }

  addNewTodo() {
    this.router.navigate(['todos',-1]);
  }
}
