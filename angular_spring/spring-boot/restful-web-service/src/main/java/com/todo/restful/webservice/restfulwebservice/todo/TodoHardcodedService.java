package com.todo.restful.webservice.restfulwebservice.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcodedService {
    private static List<Todo> todos=new ArrayList();
    private static int idcounter=0;

    static {
        todos.add(new Todo(++idcounter, "wang", "learn AWS", false, new Date()));
        todos.add(new Todo(++idcounter, "wang", "learn Azure", false, new Date()));
        todos.add(new Todo(++idcounter, "wang", "learn dancing", false, new Date()));
        todos.add(new Todo(++idcounter, "wang", "learn relaxing", false, new Date()));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(int id){
        Todo todo=findById(id);
        if(todo==null){
            return null;
        }
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(int id){
        for(Todo todo:todos){
            if(todo.getId()==id){
                return todo;
            }
        }
        return null;
    }

    public Todo updateTodo(int id){
        Todo todo = findById(id);
        if(todo==null){
            return null;
        }else{

        }
        return todo;
    }

    public Todo save(Todo todo){
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idcounter);
            todos.add(todo);
        }else{
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }
}
