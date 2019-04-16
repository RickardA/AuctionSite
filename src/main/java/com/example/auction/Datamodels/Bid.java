package com.example.auction.Datamodels;

public class Bid {

    private Long buyerID;
    private Long itemID;
    private double current_price;

    public Bid(){

    }
    public Bid(Long buyerID, Long itemID, double current_price) {
        this.buyerID = buyerID;
        this.itemID = itemID;
        this.current_price = current_price;
    }

    public Long getBuyerID() {
        return buyerID;
    }

    public void setBuyerID(Long buyerID) {
        this.buyerID = buyerID;
    }

    public Long getItemID() {
        return itemID;
    }

    public void setItemID(Long itemID) {
        this.itemID = itemID;
    }

    public double getCurrent_price() {
        return current_price;
    }

    public void setCurrent_price(double current_price) {
        this.current_price = current_price;
    }
}
