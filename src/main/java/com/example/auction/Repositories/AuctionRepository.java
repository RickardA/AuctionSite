package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends CrudRepository<Auction, Long> {
    Auction findByItemID(long itemID);

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING'",nativeQuery = true)
    List<Auction> findAll();

    List<Auction> findByTitleIsContaining(String title);

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING' ORDER BY itemid DESC LIMIT 3", nativeQuery = true)
    List<Auction> findLatestThree();

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING' ORDER BY deadline ASC LIMIT 3", nativeQuery = true)
    List<Auction> findThreeNearestDeadline();

}