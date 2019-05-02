package com.example.auction.Repositories;

import com.example.auction.Datamodels.Bid;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface BidRepository extends CrudRepository<Bid, Long> {
    @Query(value = "SELECT * FROM bid WHERE itemID = :itemID ORDER BY amount DESC", nativeQuery = true)
    List<Bid> findByItemID(@Param("itemID") Long itemID);
    List<Bid> findAll();

    List<Bid> findAllByBuyerID(@Param("buyerID") String buyerID);

    @Query(value = "SELECT * FROM bid WHERE itemID IN :auctionIDS",nativeQuery = true)
    List<Bid> getAllBids(@Param("auctionIDS") List<String> auctionIDS);

    @Query(value = "UPDATE bid SET is_read = 1 WHERE bidid = :bid_id", nativeQuery = true)
    void updateBidReadStatus(@Param("bid_id") Long bid_id);

    Bid findByBidID(@Param("bidID")Long bidID);
}
