import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {RouteGuardService} from './service/route-guard.service';
import {RegistrationComponent} from './registration/registration.component';
import {TodoComponent} from './todo/todo.component';
import {TodoChartComponent} from './todo-chart/todo-chart.component';

export const routes: Routes = [
  // Nothing entered, take to the default which is the login component
  { path:'', component: LoginComponent},
  // Take to the specified components below
  //E.g. baseURL/login
  { path:'login', component: LoginComponent},
  { path:'register', component: RegistrationComponent},
  { path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path:'welcome', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path:'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  { path:'visual', component: TodoChartComponent, canActivate:[RouteGuardService]},
  { path:'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path:'**', component: ErrorComponent}
];
