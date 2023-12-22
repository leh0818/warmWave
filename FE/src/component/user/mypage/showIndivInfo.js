import { useEffect, useState } from "react";
import CheckPasswordModal from "./passwordModal/checkPasswordModal";

function ShowIndivInfo(props) {
  const userInfo = props.userInfo;
  const { name, email, address } = userInfo;
  const [checkModalShow, setCheckModalShow] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  const handleCheckModalShow = async () => {
    setCheckModalShow(true);
  }

  useEffect(() => {
    if (isPassed) {
      props.sendDataToParent('edit');
    }
  }, [isPassed]);

  return (
    <div className="col-md-8 mt-5">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">닉네임</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {name}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">이메일</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {email}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">주소</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {address}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-info" onClick={handleCheckModalShow}>정보수정</button>
            </div>
          </div>
        </div>
      </div>
      <CheckPasswordModal userInfo={userInfo} show={checkModalShow} setShow={setCheckModalShow} passwordCheckResult={setIsPassed} />
    </div>
  )
}

export default ShowIndivInfo;