package com.example.auction.Controllers;

import com.example.auction.Datamodels.Message;
import com.example.auction.Repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    MessageRepository repo;

    @GetMapping
    private List<Message> getMessages(@RequestParam String userID){
        System.out.println("User id is "+userID);
        return repo.findMyMessages(userID);
    }
}
