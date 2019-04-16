package com.example.auction.Controllers;

import com.example.auction.Datamodels.User;
import com.example.auction.Services.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user/")
public class UserController {

    @Autowired
    MyUserDetailsService service;

    @GetMapping
    String test(){
        return "Hello World";
    }

    @PostMapping
    void registerUser(@RequestBody User user){
        service.addUser(user);
    }
}
