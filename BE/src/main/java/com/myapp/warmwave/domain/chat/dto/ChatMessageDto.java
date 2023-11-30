package com.myapp.warmwave.domain.chat.dto;

import lombok.*;

import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ChatMessageDto {
    private Long userId;
    private Long roomId;
    private String sender;
    private String content;
    private Date timestamp;
}