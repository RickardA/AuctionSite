package com.example.auction.Controllers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import com.example.auction.Datamodels.Wrapper;
import com.example.auction.Repositories.BidRepository;
import com.example.auction.Services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        Bid bid = repo.save(placedBid);
        Wrapper wrapper = new Wrapper("BID",bid);
        socketController.sendToAll(wrapper,Wrapper.class);
    }

    @GetMapping("bid")
    private Iterable getBidByID(@RequestParam List auctionID){
        return repo.getAllBids(auctionID);
    }
}
