import React, { useEffect, useState } from 'react';
import jwtAxios, { API_SERVER_HOST } from '../../util/jwtUtil.js';
import DaumPost from '../daumPost.js';
import ChangePasswordModal from './passwordModal/changePasswordModal.js';
import useToast from '../../hooks/useToast.js';

function EditIndivInfo(props) {
  const userInfo = props.userInfo;
  const { userId, userType, name, email, address } = userInfo;
  const [changeModalShow, setChangeModalShow] = useState(false);
  const [editData, setEditData] = useState({});
  const { showToast } = useToast();

  const handleChangeModalShow = () => {
    setChangeModalShow(true);
  }

  const handleSaveChangedInfo = () => {
    editData.nickname = document.querySelector("#nickname").value;

    jwtAxios.put(`${API_SERVER_HOST}/api/users/${userId}/${userType}`, editData)
      .then(res => {
        showToast('정보가 수정되었습니다.', 'success');
        goToInfoPage();
      })
      .catch(err => {

      });
  }

  const handleSubmitKakaoPost = (address) => {
    const sidoAddress = address.provinceAddress;
    const sigunguAddress = address.cityAddress;
    const detailAddress = address.townAddress;
    const fullAddress = address.provinceAddress + address.cityAddress + address.townAddress;

    setEditData({
      nickname: '',
      sdName: sidoAddress,
      sggName: sigunguAddress,
      details: detailAddress,
      fullAddr: fullAddress
    });

    const inputAddress = document.querySelector('#address');
    inputAddress.value = fullAddress;
  }

  const goToInfoPage = () => {
    props.sendDataToParent('show');
  }

  return (
    <div className="col-md-8 mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">닉네임</h6>
            </div>
            <div className="d-flex col-sm-9 align-items-center">
              <input id='nickname' className='form-control form-control-sm' type='text' defaultValue={name} />
            </div>
          </div>
          <div className="row mt-1">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="d-flex col-sm-9 align-items-center">
              <input disabled className='form-control form-control-sm' type='text' defaultValue={email} />
            </div>
          </div>
          <div className="row flex-nowrap">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">주소</h6>
            </div>
            <div className="d-flex col-sm-7 align-items-center">
              <input id='address' className='form-control form-control-sm' type='text' defaultValue={address} />
            </div>
            <div className="d-flex align-items-center col-sm-2">
              <DaumPost callFunction={handleSubmitKakaoPost} />
            </div>
          </div>
          <div className="row">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">비밀번호</h6>
            </div>
            <div className="d-flex col-sm-7 align-items-center">
              <button onClick={handleChangeModalShow}>비밀번호 변경</button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-2">
              <button className="btn btn-info w-100" onClick={handleSaveChangedInfo}>저장</button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-secondary w-100" onClick={goToInfoPage}>취소</button>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal userInfo={userInfo} show={changeModalShow} setShow={setChangeModalShow} />
    </div>
  )
}

export default EditIndivInfo;