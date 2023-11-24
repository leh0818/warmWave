package com.myapp.warmwave.user.repository;

import com.myapp.warmwave.common.Role;
import com.myapp.warmwave.config.JpaConfig;
import com.myapp.warmwave.domain.address.entity.Address;
import com.myapp.warmwave.domain.address.repository.AddressRepository;
import com.myapp.warmwave.domain.image.entity.Image;
import com.myapp.warmwave.domain.image.repository.ImageRepository;
import com.myapp.warmwave.domain.temperture.entity.Temperature;
import com.myapp.warmwave.domain.temperture.repository.TemperatureRepository;
import com.myapp.warmwave.domain.user.entity.Institution;
import com.myapp.warmwave.domain.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
@Import(JpaConfig.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private TemperatureRepository temperatureRepository;

    private Address savedAddress;
    private Image savedImage;
    private Temperature savedTemperature;

    private Institution institution() {
        return Institution.builder()
                .id(1L)
                .email("email")
                .password("1234")
                .role(Role.INSTITUTION)
                .address(savedAddress)
                .profileImg(savedImage)
                .isApprove(false)
                .institutionName("기관1")
                .registerNum("123456789")
                .temperature(savedTemperature)
                .build();
    }

    @BeforeEach
    void setup() {
        savedAddress = addressRepository.save(Address.builder()
                .id(1L)
                .userType(Role.INSTITUTION)
                .details("상세주소1")
                .sdName("서울")
                .sggName("강남구")
                .fullAddr("서울 강남구 삼성동")
                .build());

        savedImage = imageRepository.save(Image.builder()
                .id(1L)
                .createdAt(LocalDateTime.now())
                .imgName("이미지1")
                .imgUrl("이미지주소1")
                .build());

        savedTemperature = temperatureRepository.save(Temperature.builder()
                .id(1L)
                .celsius(36.5)
                .build());
    }

    @DisplayName("기관 사용자 회원가입")
    @Test
    void addUser() {
        // given
        Institution user = institution();

        // when
        Institution savedUser = (Institution) userRepository.save(user);

        // then
        assertThat(savedUser).isEqualTo(user);
    }

    @DisplayName("기관 사용자 조회 (전체)")
    @Test
    void findAllUser() {
        // given
        userRepository.save(institution());

        // when
        List<Institution> institutionList = userRepository.findAll();

        // then
        assertThat(institutionList.size()).isEqualTo(1);
    }

    @DisplayName("기관 사용자 조회 (승인 O)")
    @Test
    void findUserByIsApproveTrue() {
        // given
        Institution savedUser = institution();

        // when
        savedUser.approve();
        userRepository.save(savedUser);

        List<Institution> institutionList = userRepository.findAllByIsApproveTrue();

        // then
        assertThat(institutionList.size()).isEqualTo(1);
    }

    @DisplayName("기관 사용자 조회 (승인 X)")
    @Test
    void findUserByIsApproveFalse() {
        // given
        userRepository.save(institution());

        // when
        List<Institution> institutionList = userRepository.findAllByIsApproveFalse();

        // then
        assertThat(institutionList.size()).isEqualTo(1);
    }

    @DisplayName("기관 사용자 가입 승인")
    @Test
    void approveUser() {
        // given
        Institution savedUser = institution();

        // when
        savedUser.approve();
        userRepository.save(savedUser);

        // then
        assertThat(savedUser.getIsApprove()).isTrue();
    }

    @DisplayName("기관 사용자 정보 수정")
    @Test
    void updateUserInfo() {
        // given
        Institution savedUser = institution();

        // when
        savedAddress.update("서울 강남구 OO동", "서울", "강남구", "상세주소2");
        addressRepository.save(savedAddress);
        savedImage.update("이미지2", "이미지주소2");
        imageRepository.save(savedImage);

        savedUser.updateUserInfo("12345", savedAddress, savedImage);
        userRepository.save(savedUser);

        // then
        assertThat(savedUser).isNotEqualTo(institution());
    }

    @DisplayName("기관 사용자 정보 삭제")
    @Test
    void deleteUser() {
        // given
        Institution user = (Institution) userRepository.save(institution());

        // when
        userRepository.delete(user);

        // then
        Optional<Institution> optionalInstitution = userRepository.findById(user.getId());
        assertThat(optionalInstitution).isEmpty();
    }
}
