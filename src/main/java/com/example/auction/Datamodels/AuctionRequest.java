package com.example.auction.Datamodels;

import java.util.List;

public class AuctionRequest extends Auction {
    public List<ImageRequest> getImages() {
        return images;
    }

    public void setImages(List<ImageRequest> images) {
        this.images = images;
    }

    private List<ImageRequest> images;

}
