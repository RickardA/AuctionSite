package com.example.auction.Services;

import com.example.auction.Datamodels.Message;
import com.example.auction.Datamodels.User;
import com.example.auction.Datamodels.Wrapper;
import com.example.auction.Repositories.MessageRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class SocketService {

    @Autowired
    MessageRepository messageRepository;

    private List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();
    private HashMap<String,WebSocketSession> authenticatedSessions = new HashMap<>();
    private HashMap<WebSocketSession,String> sessionXuser = new HashMap<>();

    public void sendToOne(WebSocketSession webSocketSession, String message) throws IOException {
        webSocketSession.sendMessage(new TextMessage(message));
    }

    public void sendToOne(WebSocketSession webSocketSession, Object obj, Class klass) throws IOException {
        sendToOne(webSocketSession, new Gson().toJson(obj, klass));
    }

    public void sendToAll(Object obj, Class klass) {
        sendToAll(new Gson().toJson(obj, klass));
    }

    public void sendToAll(String message) {
        TextMessage msg = new TextMessage(message);
        for(WebSocketSession webSocketSession : sessions) {
            try {
                webSocketSession.sendMessage(msg);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void unpackMessage(WebSocketSession socketSession,TextMessage message){
        Gson gson = new Gson();
        Wrapper wrapper = gson.fromJson(message.getPayload(),Wrapper.class);
        System.out.println(message.getPayload());
        switch (wrapper.getType()){
            case "CONNECT":
                User connectingUser = gson.fromJson(wrapper.getObject().toString(),User.class);
                if(authenticatedSessions.containsKey(connectingUser.getMail())){
                    authenticatedSessions.replace(connectingUser.getMail(),socketSession);
                    sessionXuser.replace(socketSession,connectingUser.getMail());
                }else{
                    authenticatedSessions.put(connectingUser.getMail(),socketSession);
                    sessionXuser.put(socketSession,connectingUser.getMail());
                }
                System.out.println("connected " +connectingUser.getMail());
                break;
            case "DISCONNECT":
                User disconnectingUser = gson.fromJson(wrapper.getObject().toString(),User.class);
                authenticatedSessions.remove(disconnectingUser.getMail());
                sessionXuser.remove(socketSession);
                System.out.println("disconnected " + disconnectingUser.getMail());
                break;
            case "MESSAGE":
                Message recievedMessage = gson.fromJson(wrapper.getObject().toString(), Message.class);
                Wrapper newWrapper = new Wrapper("MESSAGE", recievedMessage);
                messageRepository.save(recievedMessage);
                try {
                    sendToOne(authenticatedSessions.get(recievedMessage.getSender()),newWrapper,Wrapper.class);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                if(authenticatedSessions.containsKey(recievedMessage.getReciever())){
                    try {
                        sendToOne(authenticatedSessions.get(recievedMessage.getReciever()),newWrapper,Wrapper.class);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }else{
                    System.out.println("User is not online");
                }
                break;
        }

    }

    public void addSession(WebSocketSession session) {
        sessions.add(session);
    }

    public void removeSession(WebSocketSession session) {
        sessions.remove(session);
        String userToRemove = sessionXuser.get(session);
        authenticatedSessions.remove(userToRemove);
        sessionXuser.remove(session);
        System.out.println("removed session for user: " + userToRemove);
    }
}