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

import javax.imageio.ImageIO;
import javax.xml.bind.DatatypeConverter;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/api/auctions/")
public class AuctionController {
    @Autowired
    AuctionRepository repo;

    @GetMapping
    Iterable getPosts() {
        return repo.findAll();
    }

    @PostMapping(value = "addImage")
    public ResponseEntity create(@RequestParam("file") MultipartFile file) {
        System.out.println(file);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "addAuction")
    public boolean addAuction(@RequestBody Auction auction) {
        String imageID = UUID.randomUUID().toString();
        if (auction.getImage() != null) {
            auction.setImageURL("http://localhost:8080/static/img/" + imageID + ".png");
        }
        repo.save(auction);
        String image = auction.getImage();
        if (image != null) {
            byte[] imagedata = DatatypeConverter.parseBase64Binary(image.substring(image.indexOf(",") + 1));
            BufferedImage bufferedImage = null;
            try {
                bufferedImage = ImageIO.read(new ByteArrayInputStream(imagedata));
                ImageIO.write(bufferedImage, "png", new File(System.getProperty("user.dir") + "\\src\\main\\resources\\static\\uploads\\" + imageID + ".png"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return true;
    }

}
