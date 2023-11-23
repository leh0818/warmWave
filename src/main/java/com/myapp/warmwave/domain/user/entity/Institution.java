package com.myapp.warmwave.domain.user.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@AllArgsConstructor
@Builder
@DiscriminatorValue("institution")
public class Institution extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String institutionName;

    @Column(unique = true)
    private String registerNum;

    private Boolean isApprove;
}
