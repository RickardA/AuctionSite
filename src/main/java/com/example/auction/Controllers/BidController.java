package com.example.auction.Controllers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import com.example.auction.Datamodels.Wrapper;
import com.example.auction.Repositories.AuctionRepository;
import com.example.auction.Repositories.BidRepository;
import com.example.auction.Services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.util.List;

@RestController
@RequestMapping("/api/bids/")
public class BidController {
    @Autowired
    private BidRepository repo;

    @Autowired
    private AuctionRepository auctionRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private SocketService socketController;

    @GetMapping
    private Iterable getPosts(){
        return repo.findAll();
    }

    @PostMapping
    private boolean placeBid(@RequestBody Bid placedBid){
        List<Bid> bids = repo.findByItemID(placedBid.getItemID());
        Auction auction = auctionRepository.findByItemID(placedBid.getItemID());
        System.out.println(auction.getStatus());
        System.out.println(!auction.getStatus().contains("SOLD"));
        if((bids.isEmpty() || placedBid.getAmount() > bids.get(0).getAmount()) && !auction.getStatus().contains("SOLD") && !auction.getSellerID().equals(placedBid.getBuyerID())) {
            Bid bid = repo.save(placedBid);
            StoredProcedureQuery updateBid = entityManager.createStoredProcedureQuery("updateBidStatus");
            updateBid.registerStoredProcedureParameter(1,Long.class, ParameterMode.IN);
            updateBid.setParameter(1, bid.getItemID());
            updateBid.execute();
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
