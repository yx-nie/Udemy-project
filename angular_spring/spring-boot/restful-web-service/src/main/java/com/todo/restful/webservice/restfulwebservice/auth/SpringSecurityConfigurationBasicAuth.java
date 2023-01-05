package com.todo.restful.webservice.restfulwebservice.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth {

    @Bean
    protected SecurityFilterChain FilterChain(HttpSecurity http) throws Exception{
        //logger.debug("Using default configure(HttpSecurity). If subclass this will potentially");

        http.
                csrf().disable()
                .authorizeHttpRequests((authorizationManagerRequestMatcherRegistry)
                        ->authorizationManagerRequestMatcherRegistry.requestMatchers(HttpMethod.OPTIONS,"/**")
                        .permitAll()
                        .anyRequest().authenticated() );
        http.httpBasic();
        return http.build();
    }
}






