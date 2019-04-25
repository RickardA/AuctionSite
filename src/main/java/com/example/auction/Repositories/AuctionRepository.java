package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends CrudRepository<Auction, Long>, JpaRepository<Auction, Long> {
    Auction findByItemID(long itemID);

    Page<Auction> findAll(Pageable pageable);

    List<Auction> findByTitleIsContaining(String title);

    @Query(value = "SELECT * FROM auction ORDER BY itemid DESC LIMIT 3", nativeQuery = true)
    List<Auction> findLatestThree();

    @Query(value = "SELECT * FROM auction ORDER BY deadline ASC LIMIT 3", nativeQuery = true)
    List<Auction> findThreeNearestDeadline();

}