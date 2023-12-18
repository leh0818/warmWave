import React, { useState, useEffect } from 'react';
import jwtAxios from '../../util/jwtUtil';
export const API_SERVER_HOST = 'http://localhost:8080'

function EditIndivInfo(props) {
  const userInfo = props.userInfo;
  const userId = userInfo.userId;
  const userType = userInfo.userType;
  const name = userInfo.name;
  const email = userInfo.email;
  const address = userInfo.address;
  const [password, setPassword] = useState();

  const save = () => {
    // console.log(`${API_SERVER_HOST}/api/users/${userId}/${userType}` + ' ' + 'back end api is calling !!!');
    // jwtAxios.put(`${API_SERVER_HOST}/api/users/${userId}/${userType}`, editForm)
    //   .then(res => {
    //     const resData = res.data;
    //     console.log(`${API_SERVER_HOST}/api/users/${userId}/${userType}` + ' ' + 'back end api is called successfully !!!');
    //     console.log('response data: ' + JSON.stringify(resData));
    //   });
  }

  useEffect(() => {
    const editForm = {
      password: '',
      nickname: name,
      fullAddr: '',
      sdName: '',
      sggName: '',
      details: ''
    }


  }, [])

  const goToInfoPage = () => {
    props.sendDataToParent('show');
  }

  return (
    <div className="col-md-8 mt-5">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-2">
              <h6 className="mb-0">닉네임</h6>
            </div>
            <div className="col-sm-9">
              <input className='form-control form-control-sm' type='text' defaultValue={name} />
            </div>
          </div>
          <div className="row mt-1 mb-1">
            <div className="col-sm-2">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="col-sm-9">
              <input className='form-control form-control-sm' type='text' defaultValue={email} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2">
              <h6 className="mb-0">주소</h6>
            </div>
            <div className="col-sm-7">
              <input className='form-control form-control-sm' type='text' defaultValue={address} />
            </div>
            <div className="col-sm-2">
              <button>주소검색</button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-2">
              <button className="btn btn-info w-100" onClick={save}>저장</button>
            </div>
            <div className="col-sm-2">
              <button className="btn btn-secondary w-100" onClick={goToInfoPage}>취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditIndivInfo;