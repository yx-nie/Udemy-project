import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:String){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    // console.log("Execute hello wolrd service.")
  }

  deleteTodo(username:any,
    id:any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:any,
    id:any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username:any,
    id:any, todo:Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }

  createTodo(username:any,
    id:any, todo:Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos/${id}`,todo);
  }
}
