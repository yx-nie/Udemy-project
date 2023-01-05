import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username='wang'
  password='bing'
  errormessage='Invalid Credentials'
  invalidLogin=false
  
 // dependency injection HardcodedauthenticationService
  constructor(private router: Router,
    public authentication: HardcodedauthenticationService){

  }

  ngOnInit(): void {
      
  }

  handlelogin(){
    
    // if(this.username=='wang'&&this.password=='bing'){
    if(this.authentication.authenticate(this.username, this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
