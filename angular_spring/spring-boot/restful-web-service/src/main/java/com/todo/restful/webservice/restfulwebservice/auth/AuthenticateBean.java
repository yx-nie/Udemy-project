package com.todo.restful.webservice.restfulwebservice.auth;

public class AuthenticateBean {
    private String message;
    public AuthenticateBean(String message) {
        this.message=message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
