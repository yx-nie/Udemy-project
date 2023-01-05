import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'




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

  executeHelloWorldServiceWithVariable(name:any){
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeder();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    //the link should be included by tick but not quote 
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`,{headers});
  }
  
  createBasicAuthenticationHttpHeder(){
    let username = 'wang'
    let password = 'bing'
    //encoding the basicAuthHeaderString just like the form in the APTI tester
    let basicAuthHeaderString = 'Basic' + window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}

export class HelloWorldBean{

  constructor(public message:String){
  }

}
