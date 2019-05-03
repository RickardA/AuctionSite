package com.example.auction.Datamodels;

public class Notification {
    private String notificationID;
    private String title;
    private double current_price;
    private long itemID;
    private String name;


    public Notification() {
    }

    public Notification(String notificationID, String title, double current_price, long itemID, String name) {
        this.notificationID = notificationID;
        this.title = title;
        this.current_price = current_price;
        this.itemID = itemID;
        this.name = name;
    }

    public String getNotificationID() {
        return notificationID;
    }

    public String getTitle() {
        return title;
    }

    public double getCurrent_price() {
        return current_price;
    }

    public long getItemID() {
        return itemID;
    }

    public String getName() {
        return name;
    }
}
