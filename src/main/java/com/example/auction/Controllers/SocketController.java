package com.example.auction.Controllers;

import com.example.auction.Datamodels.Wrapper;
import com.example.auction.Services.SocketService;
import com.google.gson.Gson;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;

@Controller
public class SocketController extends TextWebSocketHandler {

    // NOTE: Can not use @Autowired here due to WebSocketConfig instantiating the SocketController
    private SocketService socketService;
    public void setSocketService(SocketService socketService) {
        this.socketService = socketService;
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        socketService.unpackMessage(session,message);
    }

    public void sendMessage(String message){
        socketService.sendToAll(message);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        socketService.addSession(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        socketService.removeSession(session);
    }
}