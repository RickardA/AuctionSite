package com.example.auction.Mappers;

import com.example.auction.Datamodels.Auction;
import com.example.auction.Datamodels.AuctionRequest;

public class AuctionMapper {

    public static Auction mapAuctionFromRequest(AuctionRequest request) {
        Auction auction = new Auction();
        auction.setTitle(request.getTitle());
        auction.setDeadline(request.getDeadline());
        auction.setDescription(request.getDescription());
        auction.setItemID(request.getItemID());
        auction.setSellerID(request.getSellerID());
        auction.setMin_price(request.getMin_price());
        auction.setStatus(request.getStatus());
        return auction;
    }
}
