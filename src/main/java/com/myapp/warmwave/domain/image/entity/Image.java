package com.myapp.warmwave.domain.image.entity;

import com.myapp.warmwave.domain.article.entity.Article;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Table(name = "TB_IMAGE")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imgName;

    private String imgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ARTICLE_ID")
    private Article article;

    @CreatedDate
    private LocalDateTime createdAt;

    public void update(String imgName, String imgUrl) {
        this.imgName = imgName;
        this.imgUrl = imgUrl;
    }
}
