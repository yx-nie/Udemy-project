import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  isUser:boolean=false;

  constructor(public authenticate: HardcodedauthenticationService){

  }

  ngOnInit(){
    this.isUser=this.authenticate.isUserLoggedIn();
      
  }

}
