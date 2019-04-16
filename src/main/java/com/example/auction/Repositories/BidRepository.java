package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BidRepository extends CrudRepository<Bid, Long> {
    Auction findByItemID(Long itemID);
    List<Bid> findAll();
}
