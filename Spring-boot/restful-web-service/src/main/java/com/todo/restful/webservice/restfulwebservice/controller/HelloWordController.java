package com.todo.restful.webservice.restfulwebservice.controller;

import org.springframework.web.bind.annotation.*;


//Controller is used to handle http request
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWordController {
    //get
    //url
    //method-"hello world"
    @GetMapping(path="/hello-world")
    public String helloWorld(){
        return "hello world";
    }

    @GetMapping(path="/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        //throw new RuntimeException("Some error has happened! Contact ******");
        return new HelloWorldBean("hello world-changed");
    }

    @GetMapping(path="/hello-world-bean/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name){
        return new HelloWorldBean(String.format("hello world, %s", name));
    }
}
