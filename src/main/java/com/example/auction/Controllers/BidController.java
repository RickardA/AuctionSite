package com.example.auction.Controllers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import com.example.auction.Repositories.BidRepository;
import com.example.auction.Services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bids/")
public class BidController {
    @Autowired
    private BidRepository repo;

    @Autowired
    private SocketService socketController;

    @GetMapping
    private Iterable getPosts(){
        return repo.findAll();
    }

    @PostMapping
    private void placeBid(@RequestBody Bid placedBid){
        System.out.println("bid is being placed " + placedBid.getItemID());
        socketController.sendToAll(""+placedBid.getItemID());
        repo.save(placedBid);
    }

    @GetMapping("bid")
    private Iterable getBidByID(@RequestParam long auctionID){
        return repo.findByItemID(auctionID);
    }
}
