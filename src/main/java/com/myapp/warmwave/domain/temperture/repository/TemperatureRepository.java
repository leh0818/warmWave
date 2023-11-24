package com.myapp.warmwave.domain.temperture.repository;

import com.myapp.warmwave.domain.temperture.entity.Temperature;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemperatureRepository extends JpaRepository<Temperature, Long> {
}
