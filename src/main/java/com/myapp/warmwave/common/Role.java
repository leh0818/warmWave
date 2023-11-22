package com.myapp.warmwave.common;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    INDIVIDUAL("개인"), INSTITUTION("기관"), ADMIN("관리자");

    private final String role;
}
