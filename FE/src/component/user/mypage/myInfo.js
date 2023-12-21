import React, { useState } from 'react';
import ShowIndivInfo from './showIndivInfo';
import ShowInstInfo from './showInstInfo';
import EditInstInfo from './editInstInfo';
import EditIndivInfo from './editIndivInfo';

function MyInfo(props) {
  const userInfo = props.userInfo
  const { userType } = userInfo
  //status: 게시글이 정보 보여주기 상태인지 수정 가능 상태인지를 저장
  const [status, setStatus] = useState('show');

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  const switchPage = status => {
    props.reRender(true);
    setStatus(status);
  }

  if (userType === 'institution' && status === 'show') {
    return <ShowInstInfo userInfo={userInfo} sendDataToParent={switchPage} />
  } else if (userType === 'individual' && status === 'show') {
    return <ShowIndivInfo userInfo={userInfo} sendDataToParent={switchPage} />
  } else if (userType === 'institution' && status === 'edit') {
    return <EditInstInfo userInfo={userInfo} sendDataToParent={switchPage} />
  } else {
    return <EditIndivInfo userInfo={userInfo} sendDataToParent={switchPage} />
  }
}

export default MyInfo;