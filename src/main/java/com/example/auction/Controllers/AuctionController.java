package com.example.auction.Controllers;

import com.example.auction.Database.DB;
import com.example.auction.Datamodels.Auction;
import com.example.auction.Repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import javax.imageio.ImageIO;
import javax.validation.Valid;
import javax.xml.bind.DatatypeConverter;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {
    public static String s = "hej";

    @Autowired
    private AuctionRepository repo;

    @GetMapping
    private Iterable getPosts() {
        return repo.findAll();
    }

    @GetMapping("/search")
    List<Auction> getSearchedAuctions(@RequestParam String title){
        return repo.findByTitleIsContaining(title);
    }

    @GetMapping("/threelatest")
    private Iterable getThreeLatestAuctions(){
        return repo.findLatestThree();
    }

    @GetMapping("/threenearest")
    private Iterable getThreeNearestDeadline(){
        return repo.findThreeNearestDeadline();
    }

    @PostMapping(value = "addImage")
    public ResponseEntity create(@RequestParam("file") MultipartFile file) {
        System.out.println(file);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @PostMapping(value = "addAuction")
    public ResponseEntity<Auction> addAuction(@Valid @RequestBody Auction auction) {
        /*String imageID = UUID.randomUUID().toString();
        if (auction.getImages() != null) {
            auction.setIm("http://localhost:8080/img/" + imageID + ".png");
        }*/
        Auction savedAuction = repo.save(auction);
        /*
        String eventID = "a" + savedAuction.getItemID();
        s = "a" + savedAuction.getItemID();
        DB.updateStatus(eventID, savedAuction.getDeadline(), savedAuction.getItemID());
        String image = auction.getImage();
        if (image != null) {
            byte[] imagedata = DatatypeConverter.parseBase64Binary(image.substring(image.indexOf(",") + 1));
            BufferedImage bufferedImage = null;
            try {
                bufferedImage = ImageIO.read(new ByteArrayInputStream(imagedata));
                ImageIO.write(bufferedImage, "png", new File(System.getProperty("user.dir") + "\\src\\main\\resources\\static\\img\\" + imageID + ".png"));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }*/
        return ResponseEntity.ok(auction);
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
            Map<String, String> errors = new HashMap<>();
            ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }

}
