package com.myapp.warmwave.domain.chat.entity;


import com.myapp.warmwave.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "TB_ChatMessage")
public class ChatMessage extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long chatroomId;

    private Long toUserId;

    private Long fromUserId;

    private String status;
}
