package com.example.auction.Repositories;

import com.example.auction.Datamodels.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findDistinctFirstByMailIgnoreCase(String mail);
    List<User> findAll();



}
