package com.example.auction.Repositories;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.Bid;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.util.List;
import java.util.UUID;

@Repository
@Transactional
public interface AuctionRepository extends CrudRepository<Auction, Long> {
    Auction findByItemID(long itemID);

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING'",nativeQuery = true)
    List<Auction> findAll();

    Page<Auction> findAll(Pageable pageable);

    List<Auction> findByTitleIsContaining(String title);

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING' ORDER BY itemid DESC LIMIT 3", nativeQuery = true)
    List<Auction> findLatestThree();

    @Query(value = "SELECT * FROM auction WHERE STATUS = 'ONGOING' ORDER BY deadline ASC LIMIT 3", nativeQuery = true)
    List<Auction> findThreeNearestDeadline();

    @Query(value = "SELECT * FROM auction WHERE itemID IN :auctionIDS",nativeQuery = true)
    List<Auction> getSpecificAuctions(@Param("auctionIDS") List<String> auctionIDS);
}