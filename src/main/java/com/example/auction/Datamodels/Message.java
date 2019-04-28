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
    private byte[] message;

    public Message() {
    }

    public Message(String sender, String reciever, byte[] message) {
        this.sender = sender;
        this.reciever = reciever;
        this.message = message;
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

    public byte[] getMessage() {
        return message;
    }
}
