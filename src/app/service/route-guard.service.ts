import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {BasicAuthenticationService} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{


  constructor(private basicAuthenticationService: BasicAuthenticationService,
              private router: Router,) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
   if(this.basicAuthenticationService.getAuthenticatedUser())
    return true;
   else {
     this.router.navigate(['login'])
     return false;
   }
  }
}
