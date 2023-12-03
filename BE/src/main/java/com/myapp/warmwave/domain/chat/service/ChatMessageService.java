package com.myapp.warmwave.domain.chat.service;

import com.myapp.warmwave.domain.chat.dto.ChatMessageDto;
import com.myapp.warmwave.domain.chat.dto.ResponseChatMessageDto;
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
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ChatMessageService {
    private final ChatMessageRepository chatMessageRepository;
    private final ChatRoomRepository chatRoomRepository;
    private final UserRepository<User> userRepository;

    @Transactional
    public ResponseChatMessageDto saveMessage(ChatMessageDto chatMessageDto, Long roomId, String name) {
        User user = userRepository.findByEmail(name)
                .orElseThrow(() -> new IllegalArgumentException("사용자가 존재하지 않습니다"));

        ChatRoom chatRoom = chatRoomRepository.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("채팅방이 존재하지 않습니다"));

        ChatMessage chatMessage = ChatMessage.builder().chatroom(chatRoom).sender(user).message(chatMessageDto.getContent()).timestamp((new Date())).build();
        return ResponseChatMessageDto.fromEntity(chatMessageRepository.save(chatMessage));

    }

    public List<ResponseChatMessageDto> getChatHistory(String roomId) {
        Long longRoomId = Long.parseLong(roomId);
        List<ChatMessage> chatHistoryList = chatMessageRepository.findAllById(longRoomId);
        return chatHistoryList.stream().map(ResponseChatMessageDto::fromEntity).toList();
    }
}
