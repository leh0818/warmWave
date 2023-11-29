package com.myapp.warmwave.domain.chat.controller;

import com.myapp.warmwave.domain.chat.dto.ChatMessageDto;
import com.myapp.warmwave.domain.chat.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class ChatMessageController {

    private final SimpMessagingTemplate simpMessagingTemplate;  //특정 Broker로 메세지 전달
    private final ChatMessageService chatMessageService;

    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/messages/{roomId}")
    public void sendMsg(@Payload ChatMessageDto message) {
        chatMessageService.saveMessage(message);
    }

//    @MessageMapping("/chat")
//    @SendTo("/topic/messages")
//    public ChatMessageDto sendMsg(@Payload ChatMessageDto message) {
//        return chatMessageService.saveMessage(message);
//    }

}
