package com.myapp.warmwave.domain.address.repository;

import com.myapp.warmwave.domain.address.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
