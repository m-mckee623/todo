import { Injectable } from '@angular/core';
import {HelloWorldPojo} from '../welcome-data.service';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //Makes a call to the RESTful service to return all the todos.
  retrieveAllTodos(){
    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<Todo[]>('http://localhost:8080/todos');
  }

  //Calls the RESTful service to DELETE the id of the record selected.
  retrieveTodo(id : number){
    return this.httpClient.get<Todo>(`http://localhost:8080/todos/${id}`)
  }

  //Calls the RESTful service to DELETE the id of the record selected.
  deleteTodo(id : number){
    return this.httpClient.delete(`http://localhost:8080/todos/${id}`)
  }
}
