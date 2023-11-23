package com.myapp.warmwave.domain.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@AllArgsConstructor
@Builder
@DiscriminatorValue("Individual")
public class Individual extends User{

    @Id
    @GeneratedValue
    private Long id;

    private String nickname;
}
