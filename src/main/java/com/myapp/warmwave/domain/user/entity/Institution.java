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

    private String registerNum;

    private String profImg;

//    @OneToOne
//    private Address addressId;

    private Boolean isApprove;
}
