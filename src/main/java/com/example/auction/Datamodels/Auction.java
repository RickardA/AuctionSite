package com.example.auction.Datamodels;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.util.List;

@Entity
public class Auction {
    @Id
    @GeneratedValue
    private Long itemID;
    @NotBlank(message = "Title is mandatory")
    private String title;
    @DecimalMin(value = "1", message = "Minimum price should be at least $1")
    private double min_price;
    private String status;
    @NotBlank(message = "Description is mandatory")
    private String description;
    @NotBlank(message ="sellerID is mandatory")
    private String sellerID;
    @NotNull(message = "Deadline is mandatory")
    private Date deadline;
    public Auction(){}

    public Auction(Long itemID, String title, double min_price, String status, String description, String sellerID, Date deadline) {
        this.itemID = itemID;
        this.title = title;
        this.min_price = min_price;
        this.status = status;
        this.description = description;
        this.sellerID = sellerID;
        this.deadline = deadline;
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

    public String getSellerID() {
        return sellerID;
    }

    public void setSellerID(String sellerID) {
        this.sellerID = sellerID;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

}
