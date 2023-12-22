import { useEffect, useState } from "react";
import useToast from "../../hooks/useToast";
import CheckPasswordModal from "./passwordModal/checkPasswordModal";

function ShowInstInfo(props) {
  const userInfo = props.userInfo;
  const { name, email, address } = userInfo;
  const [checkModalShow, setCheckModalShow] = useState(false);
  const [isPassed, setIsPassed] = useState(false);
  const { showToast } = useToast();

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
              <h6 className="mb-0">기관이름</h6>
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
              <h6 className="mb-0">기관주소</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {address}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-info" onClick={handleCheckModalShow}>비밀번호 변경</button>
            </div>
          </div>
        </div>
      </div>
      <CheckPasswordModal userInfo={userInfo} show={checkModalShow} setShow={setCheckModalShow} passwordCheckResult={setIsPassed} />
    </div>
  );
}

export default ShowInstInfo;