import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicauthenticationService } from '../basicauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthen: BasicauthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
  

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);
    let basicAuthHeaderString=this.basicAuthen.getAuthenticatedToken();
    let username = this.basicAuthen.getAuthenticatedUser();

    if(basicAuthHeaderString&&username){
      req=req.clone({
        setHeaders : {
          Authorization : basicAuthHeaderString
        }
      })
    }
    
    
    return next.handle(req);

    
  }
}
