package com.myapp.warmwave.domain.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RequestIndividualJoinDto {

    @NotBlank(message = "email은 필수 입력입니다.")
    @Email
    private String email;

    @NotBlank(message = "password는 필수 입력입니다.")
    private String password;

    @NotBlank(message = "nickname은 필수 입력입니다.")
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
