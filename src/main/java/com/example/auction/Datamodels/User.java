package com.example.auction.Datamodels;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String userID;
    private String firstName;
    private String lastName;
    private String mail;
    private String password;

    public User(){

    }

    public User(String userID, String firstName, String lastName, String mail, String password) {
        this.userID = userID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
    }

    public String getUserID() {
        return userID;
    }

    public long getId() {
        return id;
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
