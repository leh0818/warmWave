package com.myapp.warmwave.domain.image.repository;

import com.myapp.warmwave.domain.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Long> {
}
