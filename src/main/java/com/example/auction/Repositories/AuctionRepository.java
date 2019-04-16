package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends CrudRepository<Auction, Long> {
    Auction findByItemID(Long itemID);
    List<Auction> findAll();
}
