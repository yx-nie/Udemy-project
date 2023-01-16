import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicauthenticationService {
 
  constructor(
    private http:HttpClient
  ) { }
// sessionstorage is used to check if the user is logged in
  // authenticate(username:string,password:string){
  //   if(username=='wang'&&password=='bing'){
  //     sessionStorage.setItem('authenticatedUser',username);
  //     return true;
  //   }else{
  //     return false;
  //   }

  // }

  executeBasicAuthenticateService(username:any, password:any){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //the link should be included by tick but not quote 
    return this.http.get<AuthenticateBean>(`http://localhost:8080/basicauth`,{headers}).pipe(
      map(data=>{
        sessionStorage.setItem('authenticatedUser',username);
        sessionStorage.setItem('token',basicAuthHeaderString);
        return data;
      })
    );
  }
  
  getAuthenticatedToken(){
    // if(this.getAuthenticatedToken())
      return sessionStorage.getItem('token') 
  }

  getAuthenticatedUser(){
    // if(this.getAuthenticatedUser())
      return sessionStorage.getItem('authenticatedUser') 
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticatedUser')
    return !(user==null)
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}

export class AuthenticateBean{

  constructor(
    public message:String
  ){

  }
}
