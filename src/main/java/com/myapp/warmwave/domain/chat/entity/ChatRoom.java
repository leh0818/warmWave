package com.myapp.warmwave.domain.chat.entity;

import com.myapp.warmwave.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "TB_CHATROOM")
public class ChatRoom extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long donatorId;

    private Long recipientId;

    private long articleId;

    private String status;

    private LocalDateTime deletedAt;
}
