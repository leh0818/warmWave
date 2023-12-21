import React, { useState, useEffect } from 'react';
import useToast from '../../hooks/useToast';
import ChangePasswordModal from './passwordModal/changePasswordModal';

function EditInstInfo(props) {
  const userInfo = props.userInfo;
  const { name, email, address } = userInfo;
  const [changeModalShow, setChangeModalShow] = useState(false);
  const { showToast } = useToast();

  const handleChangeModalShow = () => {
    setChangeModalShow(true);
  }

  const goToInfoPage = () => {
    props.sendDataToParent('show');
  }

  return (
    <div className="col-md-8 mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">기관이름</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input disabled className='form-control fomr-control-sm' type='text' defaultValue={name} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input disabled className='form-control fomr-control-sm' type='text' defaultValue={email} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">기관주소</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input disabled className='form-control fomr-control-sm' type='text' defaultValue={address} />
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
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-info" onClick={goToInfoPage}>저장</button>
              <button className="btn btn-secondary" onClick={goToInfoPage}>취소</button>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal userInfo={userInfo} show={changeModalShow} setShow={setChangeModalShow} />
    </div>
  )
}

export default EditInstInfo;