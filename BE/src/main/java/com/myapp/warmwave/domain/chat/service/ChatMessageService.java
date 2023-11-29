package com.myapp.warmwave.domain.chat.service;

import com.myapp.warmwave.domain.chat.dto.ChatMessageDto;
import com.myapp.warmwave.domain.chat.entity.ChatMessage;
import com.myapp.warmwave.domain.chat.entity.ChatRoom;
import com.myapp.warmwave.domain.chat.repository.ChatMessageRepository;
import com.myapp.warmwave.domain.chat.repository.ChatRoomRepository;
import com.myapp.warmwave.domain.user.entity.User;
import com.myapp.warmwave.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class ChatMessageService {
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository<User> userRepository;

    @Transactional
    public void saveMessage(ChatMessageDto chatMessageDto) {
        User user= userRepository.findById(chatMessageDto.getUserId()).orElseThrow(() -> new IllegalArgumentException("사용자가 존재하지 않습니다"));
        ChatRoom chatRoom=chatRoomRepository.findById(chatMessageDto.getRoomId()).orElseThrow(() -> new IllegalArgumentException("채팅방이 존재하지 않습니다"));

        ChatMessage chatMessage=ChatMessage.builder().chatroom(chatRoom).sender(user).message(chatMessageDto.getContent()).timestamp((new Date())).build();
        chatMessageRepository.save(chatMessage);

    }
}
