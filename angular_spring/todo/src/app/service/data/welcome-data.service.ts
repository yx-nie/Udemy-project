import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  //define a get service to get the bean passed from the spring boot
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute hello wolrd service.")
  }

  executeHelloWorldServiceWithVariable(username:any, password:any){
    let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //the link should be included by tick but not quote 
    return this.http.get<HelloWorldBean>(`http://localhost:8080/basicauth`,{headers});
  }
  
  // createBasicAuthenticationHttpHeder(){
  //   let username = 'wang'
  //   let password = 'bing'
  //   //encoding the basicAuthHeaderString just like the form in the APTI tester
  //   //Notice the "basic" quote below contains an empty space.
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);
  //   return basicAuthHeaderString;
  // }
}

export class HelloWorldBean{

  constructor(public message:String){
  }

}
