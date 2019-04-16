package com.example.auction.Controllers;

import com.example.auction.Repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

public class AuctionController {
    @Autowired
    AuctionRepository repo;

    @GetMapping
    Iterable getPosts(){
        return repo.findAll();
    }
}
