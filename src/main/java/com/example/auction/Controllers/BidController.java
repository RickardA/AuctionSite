package com.example.auction.Controllers;

import com.example.auction.Repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bids/")
public class BidController {
    @Autowired
    BidRepository repo;

    @GetMapping
    Iterable getPosts(){
        return repo.findAll();
    }
}