package com.example.auction.Repositories;

import com.example.auction.Datamodels.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User,Long> {

    User findDistinctFirstByMailIgnoreCase(String mail);
    List<User> findAll();

}
