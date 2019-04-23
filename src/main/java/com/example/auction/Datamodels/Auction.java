package com.example.auction.Datamodels;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Auction {
    @Id
    private Long itemID;
    private String title;
    private double min_price;
    private String status;
    private String description;
    private Long sellerID;
    private Date deadline;
    private String category;

    public Auction(){}

    public Auction(Long itemID, String title, double min_price, String status, String description, Long sellerID, Date deadline, String category) {
        this.itemID = itemID;
        this.title = title;
        this.min_price = min_price;
        this.status = status;
        this.description = description;
        this.sellerID = sellerID;
        this.deadline = deadline;
        this.category = category;
    }

    public Long getItemID() {
        return itemID;
    }

    public void setItemID(Long itemID) {
        this.itemID = itemID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getMin_price() {
        return min_price;
    }

    public void setMin_price(double min_price) {
        this.min_price = min_price;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getSellerID() {
        return sellerID;
    }

    public void setSellerID(Long sellerID) {
        this.sellerID = sellerID;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
