package com.example.auction.Database;

import com.example.auction.Database.Database;

import java.sql.*;
import java.util.UUID;

public abstract class DB {

    public static PreparedStatement preparedStatement(String SQLQuery) {
        return Database.getInstance().prepareStatement(SQLQuery);
    }

    public static void updateStatus(String eventName,Date timeout,Long itemID){
        PreparedStatement ps = preparedStatement("CREATE EVENT "+ eventName +" ON SCHEDULE AT ? DO UPDATE auction set status = 'SOLD' WHERE itemid = ?");
        try {
            ps.setDate(1,timeout);
            ps.setLong(2,itemID);
            ps.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}