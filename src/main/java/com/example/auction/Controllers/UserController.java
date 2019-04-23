package com.example.auction.Controllers;

import com.example.auction.Datamodels.User;
import com.example.auction.Services.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/user/")
public class UserController {

    @Autowired
    private MyUserDetailsService service;

    @GetMapping
    private String test(){
        return "Hello World";
    }

    @PostMapping
    private boolean registerUser(@RequestBody User user){
        return service.addUser(user);
    }

    @GetMapping("authenticate")
    private boolean currentUserName() {
        return service.authenticateUser();
    }

    @RequestMapping("/credentials")
    public String myMethod(ModelMap model){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        System.out.println("Logged in user is " + auth.getName());
        return auth.getName();
    }
}
