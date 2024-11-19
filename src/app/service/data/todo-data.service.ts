import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL, JPA_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  //Makes a call to the RESTful service to return all the todos.
  retrieveAllTodos(username : string){
    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<Todo[]>(`${API_URL}/${JPA_URL}/users/${username}/todos`);
  }

  //Calls the RESTful service to DELETE the id of the record selected.
  retrieveTodo(username : string,id : number){
    return this.httpClient.get<Todo>(`${API_URL}/${JPA_URL}/users/${username}/todos/${id}`)
  }

  //Calls the RESTful service to DELETE the id of the record selected.
  deleteTodo(username: string | null, id: number){
    return this.httpClient.delete(`${API_URL}/${JPA_URL}/users/${username}/todos/${id}`)
  }

  //Calls the RESTful service to DELETE the id of the record selected.
  updateTodo(username: string | null, id : number, todo : Todo){
    return this.httpClient.put(`${API_URL}/${JPA_URL}/users/${username}/todos/${id}`, todo)
  }

  //Calls the RESTful service to POST a new Todoo
  createTodo(username: string | null,todo : Todo){
    return this.httpClient.post(`${API_URL}/${JPA_URL}/users/${username}/todos`, todo)
  }
}
