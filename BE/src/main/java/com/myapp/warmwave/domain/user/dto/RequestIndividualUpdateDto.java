package com.myapp.warmwave.domain.user.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestIndividualUpdateDto {

    private String password;

    private String nickname;

    // 전체 주소
    private String fullAddr;

    // 시,도
    private String sdName;

    // 시,군,구
    private String sggName;

    // 상세주소
    private String details;
}
