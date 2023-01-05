import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {
  

  constructor() { }
// sessionstorage is used to check if the user is logged in
  authenticate(username:string,password:string){
    if(username=='wang'&&password=='bing'){
      sessionStorage.setItem('authenticatedUser',username);
      return true;
    }else{
      return false;
    }

  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticatedUser')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
