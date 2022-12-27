import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  

  constructor(private router: Router){

  }

  ngOnInit(): void {
      
  }

  handlelogin(){
    
    if(this.username=='wang'&&this.password=='bing'){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

}
