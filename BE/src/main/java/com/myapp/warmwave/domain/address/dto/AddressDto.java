package com.myapp.warmwave.domain.address.dto;

import com.myapp.warmwave.domain.address.entity.Address;
import com.myapp.warmwave.domain.user.entity.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddressDto {
    public AddressDto(Address address) {
        this.fullAddr = address.getFullAddr();
        this.sdName = address.getSdName();
        this.sggName = address.getSggName();
        this.details = address.getDetails();
    }

    // 전체 주소
    private String fullAddr;

    // 시,도
    private String sdName;

    // 시,군,구
    private String sggName;

    // 상세주소
    private String details;

    public AddressDto extractAddressFromUser(User user) {
        Address address = user.getAddress();
        return new AddressDto(
                address.getFullAddr(),
                address.getSdName(),
                address.getSggName(),
                address.getDetails()
        );
    }
}
