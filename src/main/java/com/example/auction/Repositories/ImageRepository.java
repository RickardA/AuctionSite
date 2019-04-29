package com.example.auction.Repositories;

import com.example.auction.Datamodels.Image;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {

    @Query(value = "SELECT * FROM image WHERE itemid = :itemid", nativeQuery = true)
    List<Image> getAllImages(@Param("itemid") Long itemid);

}
