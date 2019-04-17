package com.example.auction.Controllers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.User;
import com.example.auction.Repositories.AuctionRepository;
import com.example.auction.Services.MyUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auctions/")
public class AuctionController {
    @Autowired
    AuctionRepository repo;

    @GetMapping
    Iterable getPosts(){
        return repo.findAll();
    }

    @PostMapping(value = "addImage")
    public ResponseEntity create(@RequestParam("file") MultipartFile file){
        System.out.println(file);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "addAuction")
    public boolean addAuction(@RequestBody Auction auction){
        System.out.println("trhgrgergergergergergergergregergergergergerergerg " +auction.getCategory());
        //sdfsdfsdfwduiashfsdubfhuisdbafhusadbfuiwdsbafhisdabfusdiafbuiasdobfuiosdabfo
        //dxfnuisdbfuihsdbfuisdobfuisdabfuiosd
        return false;
    }
}
