package com.example.auction.Datamodels;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long messageID;
    private String sender;
    private String reciever;
    private String message;
    private long itemID;

    public Message() {
    }

    public Message(long messageID,String sender, String reciever, String message, long itemID) {
        this.messageID = messageID;
        this.sender = sender;
        this.reciever = reciever;
        this.message = message;
        this.itemID = itemID;
    }

    public long getItemID() {
        return itemID;
    }

    public long getMessageID() {
        return messageID;
    }

    public String getSender() {
        return sender;
    }

    public String getReciever() {
        return reciever;
    }

    public String getMessage() {
        return message;
    }
}
