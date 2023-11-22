package com.myapp.warmwave.domain.favorite_inst.entity;

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

//    private User instId;
//
//    private User indivId;
}
