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

  retrieveAllTodos(){
    //Defined the structure we expect to return, HelloWorldPojo below
    return this.httpClient.get<Todo[]>('http://localhost:8080/todos');
  }
}
