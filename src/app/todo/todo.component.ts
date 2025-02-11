import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  //ID will be used
  username: string | null = '';
  id: number = 0;
  todo: Todo = new Todo('',this.id, '', false, new Date(),'');

  constructor(
    private todoService: TodoDataService,
    //Activated route vital to return valuable info about the current route.
    private route: ActivatedRoute,
    //Navigate to the todoo page when updating.
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.username = sessionStorage.getItem('authenticateUser');
    this.displayTodo();
  }

  displayTodo(){
    //Retreive the id for the todoo selected
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo('',this.id,'',false,new Date(),'');

    if(this.id != -1){
      if (this.username != null)
        this.todoService.retrieveTodo(this.username,this.id)
          .subscribe(
            data => this.todo = data
          )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      console.log(this.id)
      this.todoService.createTodo(this.username,this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos'])
          }
        )
    } else {
      this.todoService.updateTodo(this.username,this.id, this.todo)
        .subscribe(
          data => {
            this.router.navigate(['todos'])
          }
        )
    }
  }

  navigateBack()
  {
    this.router.navigate(['/todos']);
  }
}

