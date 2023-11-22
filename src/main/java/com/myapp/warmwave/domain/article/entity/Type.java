package com.myapp.warmwave.domain.article.entity;


import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Type {
    DONATION("기부자"), BENEFICIARY("수혜자"), CERTIFICATION("기부인증");

    private final String type;
}
