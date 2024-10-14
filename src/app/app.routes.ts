import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';

export const routes: Routes = [
  // Nothing entered, take to the default which is the login component
  { path:'', component: LoginComponent},
  // Take to the specified components below
  //E.g. baseURL/login
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent},
  { path:'welcome/:name', component: WelcomeComponent},
  { path:'todos', component: ListTodosComponent},
  { path:'**', component: ErrorComponent}
];
