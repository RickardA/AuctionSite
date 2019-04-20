package com.example.auction.Controllers;

import com.example.auction.Repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auctions/")
public class AuctionController {
    @Autowired
    private AuctionRepository repo;

    @GetMapping
    private Iterable getPosts(){
        return repo.findAll();
    }

}
