import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  //ID will be used
  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    //Activated route vital to return valuable info about the current route.
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.displayTodo();
  }

  displayTodo(){
    //Retreive the id for the todoo selected
    this.id = this.route.snapshot.params['id'];
    this.todoService.retrieveTodo(this.id)
      .subscribe(
        data => this.todo = data
      )
  }

  saveTodo() {
  }
}
