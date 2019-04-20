package com.example.auction.Controllers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {
    @Autowired
    AuctionRepository repo;

    @GetMapping
    Iterable getPosts(){
        return repo.findAll();
    }

    @GetMapping("/search")
    List<Auction> getSearchedAuctions(@RequestParam String title){
        return repo.findByTitleLike(title);
    }

}
