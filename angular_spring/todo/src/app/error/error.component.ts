import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  errormessage='An error occurred! Contact support at ***'
  constructor(){

  }

  ngOnInit(): void {
    console.log(this.errormessage)
      
  }

}
