package com.myapp.warmwave.domain.user.repository;

import com.myapp.warmwave.domain.user.entity.Individual;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IndividualRepository extends JpaRepository<Individual, Long> {

    List<Individual> findAll();
    Optional<Individual> findById(Long userId);

}
