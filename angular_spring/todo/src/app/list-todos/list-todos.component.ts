import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targetDate:Date
  ){
    
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit{

  todos =[
    new Todo(1, 'learn udemy',false, new Date()),
    new Todo(2, 'learn udacity',false, new Date()),
    new Todo(3, 'learn aws',false, new Date()),
    new Todo(3, 'learn azure',false, new Date()),
  //   {
  //   id:1,
  //   description:'String1',
  //   targetDate: 2022-11-13
  // },
  // {
  //   id:2,
  //   description:'String2',
  //   targetDate: 2022-11-14
  // }
]
  
    
  
  constructor(){

  }

  ngOnInit(): void {
      
  }

}
