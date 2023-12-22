package com.myapp.warmwave.domain.address.service;

import com.myapp.warmwave.common.Role;
import com.myapp.warmwave.domain.address.dto.AddressDto;
import com.myapp.warmwave.domain.address.entity.Address;
import com.myapp.warmwave.domain.address.repository.AddressRepository;
import com.myapp.warmwave.domain.user.dto.RequestIndividualUpdateDto;
import com.myapp.warmwave.domain.user.dto.RequestInstitutionUpdateDto;
import com.myapp.warmwave.domain.user.entity.Individual;
import com.myapp.warmwave.domain.user.entity.Institution;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AddressService {
    private final AddressRepository addressRepository;

    @Transactional
    public Address createAddress(String fullAddr, String sdName, String sggName, String details) {
        Address address = Address.builder()
                .fullAddr(fullAddr)
                .sdName(sdName)
                .sggName(sggName)
                .details(details)
                .userType(Role.INSTITUTION)
                .build();

        return addressRepository.save(address);
    }

    public Optional<Address> findAddress(String fullAddr) {
        return addressRepository.findByFullAddr(fullAddr);
    }

    @Transactional
    public Address updateInstitutionAddress(RequestInstitutionUpdateDto dto, Institution institution) {
        Address originalAddress = institution.getAddress();
        AddressDto newAddressDto = new AddressDto(originalAddress);

        if (isChanged(newAddressDto, originalAddress)) {
            originalAddress.update(dto.getFullAddr(), dto.getSdName(), dto.getSggName(), dto.getDetails());
            return addressRepository.save(originalAddress);
        }

        return originalAddress;
    }

    @Transactional
    public Address updateIndividualAddress(RequestIndividualUpdateDto dto, Individual individual) {
        Address originalAddress = individual.getAddress();
        AddressDto newAddressDto = new AddressDto(originalAddress);

        if (isChanged(newAddressDto, originalAddress)) {
            originalAddress.update(dto.getFullAddr(), dto.getSdName(), dto.getSggName(), dto.getDetails());
            return addressRepository.save(originalAddress);
        }

        return originalAddress;
    }

    private boolean isChanged(AddressDto dto, Address originalAddress) {
        return dto.getSdName() == null
                || dto.getSggName() == null
                || dto.getDetails() == null
                || dto.getFullAddr().equals(originalAddress.getFullAddr());
    }
}
