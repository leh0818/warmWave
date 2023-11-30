package com.myapp.warmwave.domain.chat.repository;

import com.myapp.warmwave.domain.chat.entity.ChatRoom;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ChatRoomRepository extends JpaRepository<ChatRoom, Long> {
}
