package com.example.auction.Repositories;

import com.example.auction.Datamodels.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends CrudRepository<Message,Long> {
    @Query(value = "SELECT * FROM message WHERE sender = :userID OR reciever = :userID",nativeQuery = true)
    List<Message> findMyMessages(@Param("userID") String userId);
}
