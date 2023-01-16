package com.todo.restful.webservice.restfulwebservice.auth;

import org.springframework.web.bind.annotation.*;


//Controller is used to handle http request
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthenticationController {

    @GetMapping(path="/basicauth")
    public AuthenticateBean helloWorldBean(){
        //throw new RuntimeException("Some error has happened! Contact ******");
        return new AuthenticateBean("You're authenticated!");
    }


}
