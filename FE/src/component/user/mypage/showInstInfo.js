function ShowInstInfo(props) {
  const { name, email, address } = props.userInfo

  const goToEditPage = () => {
    props.sendDataToParent('edit');
  }

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
              <button className="btn btn-info" onClick={goToEditPage}>비밀번호 변경</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowInstInfo;