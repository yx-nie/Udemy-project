import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  
  message:String = 'some message'
  name=''
  constructor(private route:ActivatedRoute,
    ){

  }

  ngOnInit():void {
    console.log(this.message)
    //get the parameters passing by the router
    console.log(this.route.snapshot.params['name'])
    this.name=  this.route.snapshot.params['name']
    //this.router.navigate(['list-todos'])

  }
  
}


