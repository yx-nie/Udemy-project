import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HardcodedauthenticationService } from './hardcodedauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authenticate:HardcodedauthenticationService,
    private router:Router) { }
    
  //canActivate check if the user is logged in.
  canActivate(){
    if(this.authenticate.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }


  }
}

//canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
//: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;