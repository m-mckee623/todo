import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

//Below is the RESTful service to handle todos.
export class TodoDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllTodos(username : string){

    //Step 4. The service method makes a REST call to the backend server.
    //Sending a REST, GET request to the URL, http://localhost:8080/users/leonardo/todos
    //API_URL is a constant = "http://localhost:8080"
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  retrieveTodo(username : string,id : number){
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  deleteTodo(username: string | null, id: number){
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username: string | null, id : number, todo : Todo){
    return this.httpClient.put(`${API_URL}/users/${username}/todos/${id}`, todo)
  }

  createTodo(username: string | null,todo : Todo){
    return this.httpClient.post(`${API_URL}/users/${username}/todos`, todo)
  }
}
