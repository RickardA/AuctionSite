package com.example.auction.Controllers;

import com.example.auction.Datamodels.Bid;
import com.example.auction.Repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bids/")
public class BidController {
    @Autowired
    private BidRepository repo;

    @GetMapping
    private Iterable getPosts(){
        return repo.findAll();
    }

    @PostMapping
    private void placeBid(@RequestBody Bid placedBid){
        System.out.println("bid is being placed " + placedBid.getAmount());
        repo.save(placedBid);
    }
}
