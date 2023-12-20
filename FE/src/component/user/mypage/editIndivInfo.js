import React, { useState, useEffect } from 'react';
import KakaoPost from '../kakaopost/KakaoPost.js'
import ChangePasswordModal from './passwordModal/changePasswordModal.js';

function EditIndivInfo(props) {
  const userInfo = props.userInfo;
  const { name, email, address } = userInfo;
  const [changeModalShow, setChangeModalShow] = useState(false);

  const handleChangeModalShow = () => {
    setChangeModalShow(true);
  }

  const handleSaveChangedInfo = () => {
    const editForm = {

    }
    // console.log(`${API_SERVER_HOST}/api/users/${userId}/${userType}` + ' ' + 'back end api is calling !!!');
    // jwtAxios.put(`${API_SERVER_HOST}/api/users/${userId}/${userType}`, editForm)
    //   .then(res => {
    //     const resData = res.data;
    //     console.log(`${API_SERVER_HOST}/api/users/${userId}/${userType}` + ' ' + 'back end api is called successfully !!!');
    //     console.log('response data: ' + JSON.stringify(resData));
    //   });
  }

  useEffect(() => {

  }, [])

  const handleSubmitKakaoPost = (localAddress, fullAddr) => {
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
            <div className="col-sm-9">
              <input className='form-control form-control-sm' type='text' defaultValue={name} />
            </div>
          </div>
          <div className="row mt-1 mb-1">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="col-sm-9">
              <input className='form-control form-control-sm' type='text' defaultValue={email} />
            </div>
          </div>
          <div className="row">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">주소</h6>
            </div>
            <div className="col-sm-7">
              <input id='address' className='form-control form-control-sm' type='text' defaultValue={address} />
            </div>
            <div className="col-sm-2">
              <KakaoPost callFunction={handleSubmitKakaoPost} />
            </div>
          </div>
          <div className="row">
            <div className="d-flex col-sm-2 align-items-center">
              <h6 className="mb-0">비밀번호</h6>
            </div>
            <div className="col-sm-7">
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