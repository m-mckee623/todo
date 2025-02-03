import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {TodoDataService} from '../service/data/todo-data.service';
import {ActivatedRoute, Router} from '@angular/router';

//Essentially a POJO here
export class Todo {
  constructor(
    public username: string,
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
  username: string | null = '';


  constructor(
    private todoService: TodoDataService,
    //To be used for routing to update a todoo
    private router: Router,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.username = sessionStorage.getItem('authenticateUser');
    if (this.username != null)
    this.retrieveTodos(this.username);
  }

  //Moved this out to a method. Not great possibly performance wise but for this, we can use for the meantime.
  retrieveTodos(username: string){
    this.todoService.retrieveAllTodos(username).subscribe(
      response => {
        this.todos = response;
      }
    )
  }


  deleteTodo(username: string | null , id: number) {
    console.log('Delete todo id', id);
    this.todoService.deleteTodo(username,id).subscribe(
      response => {
        this.notificationMessage = `Todo, ${id}, deleted successfully.`;
        if (this.username != null)
          this.retrieveTodos(this.username);
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
