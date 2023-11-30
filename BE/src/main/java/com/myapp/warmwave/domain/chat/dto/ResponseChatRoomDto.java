package com.myapp.warmwave.domain.chat.dto;

import com.myapp.warmwave.domain.chat.entity.ChatRoom;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ResponseChatRoomDto {
    private Long id;

    private String donorName;

    private String recipientName;

    private Long articleId;

    private String status;

    private LocalDateTime deletedAt;

    public static ResponseChatRoomDto fromEntity(ChatRoom chatRoom) {
        return ResponseChatRoomDto.builder()
                .id(chatRoom.getId())
                .donorName(chatRoom.getDonor().getNickname())
                .recipientName(chatRoom.getRecipient().getInstitutionName())
                .articleId(chatRoom.getArticle().getId())
                .status(chatRoom.getStatus())
                .deletedAt(chatRoom.getDeletedAt())
                .build();
    }

}
