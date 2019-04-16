package com.example.auction.Datamodels;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
     @Id
    private long userID;
    private final String firstName;
    private final String lastName;
    private final String mail;
    private final String password;

    public User(long userID, String firstName, String lastName, String mail, String password) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
    }

    public long getId() {
        return userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getMail() {
        return mail;
    }

    public String getPassword() {
        return password;
    }
}
