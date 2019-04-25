package com.example.auction.Datamodels;

public class Wrapper {
    private String type;
    private Object object;

    public Wrapper() {
    }

    public Wrapper(String type, Object object) {
        this.type = type;
        this.object = object;
    }

    public String getType() {
        return type;
    }

    public Object getObject() {
        return object;
    }
}
