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
    private boolean placeBid(@RequestBody Bid placedBid){
        List<Bid> bids = repo.findByItemID(placedBid.getItemID());
        if(bids.isEmpty() || placedBid.getAmount() > bids.get(0).getAmount()) {
            Bid bid = repo.save(placedBid);
            Wrapper wrapper = new Wrapper("BID", bid);
            socketController.sendToAll(wrapper, Wrapper.class);
            return true;
        }else{
            return false;
        }
    }

    @GetMapping("bid")
    private Iterable getBidByID(@RequestParam List auctionID){
        return repo.getAllBids(auctionID);
    }
}
