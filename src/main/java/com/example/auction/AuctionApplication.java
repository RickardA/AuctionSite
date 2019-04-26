package com.example.auction;

import com.example.auction.Database.Database;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AuctionApplication {

    public static void main(String[] args) {
        Thread databaseThread = new Thread(Database.getInstance());
        databaseThread.setDaemon(true);
        databaseThread.start();
        SpringApplication.run(AuctionApplication.class, args);
    }

}
