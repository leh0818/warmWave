import React, { useState, useEffect } from 'react';

function EditInstInfo(props) {
  const { name, email, address } = props.userInfo;

  const save = () => {

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
              <input className='form-control fomr-control-sm' type='text' defaultValue={name} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input className='form-control fomr-control-sm' type='text' defaultValue={email} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">기관주소</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <input className='form-control fomr-control-sm' type='text' defaultValue={address} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-info" onClick={save}>저장</button>
              <button className="btn btn-secondary" onClick={goToInfoPage}>취소</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditInstInfo;