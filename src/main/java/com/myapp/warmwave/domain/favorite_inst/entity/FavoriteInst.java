package com.myapp.warmwave.domain.favorite_inst.entity;

import com.myapp.warmwave.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "TB_FAVORITE_INST")
public class FavoriteInst {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INDIVIDUAL_USER_ID")
    private User individualUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INSTITUTION_USER_ID")
    private User institutionUser;
}
