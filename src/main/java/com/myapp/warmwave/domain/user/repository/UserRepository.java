package com.myapp.warmwave.domain.user.repository;

import com.myapp.warmwave.domain.user.entity.Institution;
import com.myapp.warmwave.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface UserRepository<T extends User> extends JpaRepository<T, Long> {
    List<Institution> findAllByIsApproveTrue();
    List<Institution> findAllByIsApproveFalse();
}
