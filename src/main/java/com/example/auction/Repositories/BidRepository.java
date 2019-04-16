package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BidRepository extends CrudRepository<Bid, Long> {
    Auction findByItemID(Long itemID);
    List<Bid> findAll();
}
