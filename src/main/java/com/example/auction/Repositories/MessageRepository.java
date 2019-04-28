package com.example.auction.Repositories;

import com.example.auction.Datamodels.Message;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends CrudRepository<Message,Long> {

}
