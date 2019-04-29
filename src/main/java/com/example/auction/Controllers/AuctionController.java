package com.example.auction.Controllers;

import com.example.auction.Database.DB;
import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.AuctionRequest;
import com.example.auction.Datamodels.Image;
import com.example.auction.Mappers.AuctionMapper;
import com.example.auction.Repositories.AuctionRepository;
import com.example.auction.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

import java.util.*;

import javax.imageio.ImageIO;
import javax.validation.Valid;
import javax.xml.bind.DatatypeConverter;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/auctions")
public class AuctionController {
    public static String s = "hej";

    @Autowired
    private AuctionRepository repo;

    @Autowired
    private ImageRepository imageRepo;

    @GetMapping("/images")
    private Iterable getImages(@RequestParam List itemId){
        return imageRepo.getAllImages(itemId);
    }

    @GetMapping
    private Page<Auction> getAuctions(Pageable page){
        return repo.findAll(page);
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
    public ResponseEntity<Auction> addAuction(@Valid @RequestBody AuctionRequest auctionRequest) {
        Auction savedAuction = repo.save(AuctionMapper.mapAuctionFromRequest(auctionRequest));
        String eventID = "a" + savedAuction.getItemID();
        DB.updateStatus(eventID, savedAuction.getDeadline(), savedAuction.getItemID());

        List<Image> images = new ArrayList<>();
        if (auctionRequest.getImages().size() > 0){
            auctionRequest.getImages().forEach(imageReq -> {
                Image image = new Image();
                String url = UUID.randomUUID().toString();
                image.setImgURL("http://localhost:8080/img/" + url + ".png");
                image.setIsPrimary("true".equals(imageReq.getIsPrimary()) ? 1 : 0);
                image.setItemID(savedAuction.getItemID());
                byte[] imagedata = DatatypeConverter.parseBase64Binary(imageReq.getImg().substring(imageReq.getImg().indexOf(",") + 1));
                BufferedImage bufferedImage = null;
                try {
                    bufferedImage = ImageIO.read(new ByteArrayInputStream(imagedata));
                    ImageIO.write(bufferedImage, "png", new File(System.getProperty("user.dir") + "\\src\\main\\resources\\static\\img\\" + url + ".png"));
                } catch (IOException e) {
                    e.printStackTrace();
                } finally {
                    images.add(image);
                }
            });

            images.forEach(image -> imageRepo.save(image));
        }

        return ResponseEntity.ok(savedAuction);
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
