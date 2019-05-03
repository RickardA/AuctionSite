package com.example.auction.Repositories;

import com.example.auction.Datamodels.Bid;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface BidRepository extends CrudRepository<Bid, Long> {
    @Query(value = "SELECT * FROM bid WHERE itemID = :itemID ORDER BY amount DESC", nativeQuery = true)
    List<Bid> findByItemID(@Param("itemID") Long itemID);
    List<Bid> findAll();

    @Query(value = "SELECT * FROM bid WHERE itemID IN :auctionIDS",nativeQuery = true)
    List<Bid> getAllBids(@Param("auctionIDS") List<String> auctionIDS);

    @Modifying
    @Query(value = "UPDATE bid SET is_read = 1 WHERE buyerid = :user_id AND itemid IN :auction_ids", nativeQuery = true)
    void updateBidReadStatus(@Param("auction_ids") List<String> auction_ids, @Param("user_id") String user_id);

    Bid findByBidID(@Param("bidID")Long bidID);

}
