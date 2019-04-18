package com.example.auction.Datamodels;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import java.awt.*;
import java.sql.Date;

@Entity
public class Auction {
    @Id
    @GeneratedValue
    private Long itemID;
    private String title;
    private double min_price;
    private String status;
    private String description;
    private Long sellerID;
    private Date deadline;
    private String category;
    @Transient
    private String image;
    private String imageURL;
    public Auction(){}

    public Auction(Long itemID, String title, double min_price, String status, String description, Long sellerID, Date deadline, String category, String image) {
        this.itemID = itemID;
        this.title = title;
        this.min_price = min_price;
        this.status = status;
        this.description = description;
        this.sellerID = sellerID;
        this.deadline = deadline;
        this.category = category;
        this.image = image;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

}
