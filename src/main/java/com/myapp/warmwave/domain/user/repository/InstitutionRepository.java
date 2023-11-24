package com.myapp.warmwave.domain.user.repository;

import com.myapp.warmwave.domain.user.entity.Institution;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstitutionRepository extends JpaRepository<Institution, Long> {
}
