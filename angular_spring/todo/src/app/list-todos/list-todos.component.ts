import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';


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

  todos:Todo[]=[]
  message:String=''
  //   new Todo(1, 'learn udemy',false, new Date()),
  //   new Todo(2, 'learn udacity',false, new Date()),
  //   new Todo(3, 'learn aws',false, new Date()),
  //   new Todo(3, 'learn azure',false, new Date()),
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
// ]
  
    
  
  constructor(private service:TodoDataService,
    private router:Router){

  }

  ngOnInit(): void {
    this.refreshTodo();
      
  }
  refreshTodo(){
    this.service.retrieveAllTodos('wang').subscribe(
      Response=>{
        console.log(Response);
        this.todos=Response;}

    )

  }

  deleteItem(id:any){
    console.log(`delete todo ${id}`)
    this.service.deleteTodo('wang',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete Todo ${id} successful`
        this.refreshTodo();

      }
    )

  }

  updateItem(id:any){
    console.log(`update todo ${id}`)
    this.router.navigate(['todo',id])
    // this.service.deleteTodo('wang',id).subscribe(
    //   response=>{
    //     console.log(response);
    //     this.message=`Delete Todo ${id} successful`
    //     this.refreshTodo();

    //   }
    // )

  }

  addItem(){
    this.router.navigate(['todo',-1])
  }

}
