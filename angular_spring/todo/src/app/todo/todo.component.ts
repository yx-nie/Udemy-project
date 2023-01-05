import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  todo:Todo
  ={
    id: -1,
    description: '',
    done: false,
    targetDate: new Date()
  }
  id: number=-1



  constructor(private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router){

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    if(this.id!=-1){
      this.service.retrieveTodo('wang',this.id).subscribe(
        data=>{
          this.todo=data;
        }
      )
    }
    
      
    
      
    }
      
    
  

  saveTodo(){
    if(this.id===-1){
      this.service.createTodo('wang',this.id,this.todo).subscribe(
        data=>{console.log(data)
        this.router.navigate(['list-todos'])}
      )
    }else{
      this.service.updateTodo('wang',this.id,this.todo).subscribe(
        data=>{console.log(data)
        this.router.navigate(['list-todos'])}
      )
    }
    
    
    

  }

}
