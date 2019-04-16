package com.example.auction.Controllers;

import com.example.auction.Repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

public class AuctionController {
    @Autowired
    AuctionRepository repo;

    @GetMapping
    Iterable getPosts(){
        return repo.findAll();
    }

    @PostMapping(value = "/addPost")
    public ResponseEntity create(@RequestParam("file") MultipartFile file){
        System.out.println(file);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }
}
