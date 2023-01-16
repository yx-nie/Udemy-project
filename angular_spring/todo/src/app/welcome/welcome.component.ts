import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  
  message:String = 'some message'
  name=''
  password=''
  welcomeMessageFromService:String=''
  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService
    ){

  }

  ngOnInit():void {
    console.log(this.message)
    //get the parameters passing by the router
    console.log(this.route.snapshot.params['name']);
    this.name=  this.route.snapshot.params['name'];
    this.password= this.route.snapshot.params['password'];
    //this.router.navigate(['list-todos'])

  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldServiceWithVariable(this.name, this.password));
    this.service.executeHelloWorldServiceWithVariable(this.name, this.password).subscribe(
      response=>this.handleSuccessfulResponse(response), 
      error=>this.handleErrorResponse(error)
    );
    console.log("last line of getwelcomemessage ")
    // console.log("getWelcomeMessage");
    // return this.message;

    
    }

    handleSuccessfulResponse(response:any){
      this.welcomeMessageFromService=response.message
      console.log(this.welcomeMessageFromService);
      // console.log(response.message);
    }

    handleErrorResponse(error:any){
      // console.log(error);
      // console.log(error.error);
      // console.log(error.error.message);
      this.welcomeMessageFromService=error.error.message;
    }

    getWelcomeMessagewithParameter(){
      console.log(this.service.executeHelloWorldServiceWithVariable(this.name,this.password));
      this.service.executeHelloWorldServiceWithVariable(this.name, this.password).subscribe(
        response=>this.handleSuccessfulResponse(response), 
        error=>this.handleErrorResponse(error)
      );
      console.log("last line of getwelcomemessage ")
      // console.log("getWelcomeMessage");
      // return this.message;
  
      
      }
  }

  



