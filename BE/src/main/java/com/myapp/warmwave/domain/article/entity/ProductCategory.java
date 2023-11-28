package com.myapp.warmwave.domain.article.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ProductCategory {
    APPAREL("의류"), FOOD("음식"), ETC("기타");

    private final String type;
}
