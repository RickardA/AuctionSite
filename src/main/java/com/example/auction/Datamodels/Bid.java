package com.example.auction.Datamodels;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Bid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long bidID = 0;
    private String buyerID = "";
    private long itemID = 0;
    private double amount = 0;

    public Bid(){

    }
    public Bid(String buyerID, long itemID, double amount) {
        this.buyerID = buyerID;
        this.itemID = itemID;
        this.amount = amount;
    }

    public long getBidID(){
        return bidID;
    }
    public void setBidID(Long bidID){
        this.bidID = bidID;
    }

    public String getBuyerID() {
        return buyerID;
    }

    public void setBuyerID(String buyerID) {
        this.buyerID = buyerID;
    }

    public long getItemID() {
        return itemID;
    }

    public void setItemID(Long itemID) {
        this.itemID = itemID;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
