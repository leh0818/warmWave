import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getCookie } from "../../../util/cookieUtil";
import axios from "axios";
import { API_SERVER_HOST } from "../../../util/jwtUtil";

function CheckPasswordModal(props) {
  // const userInfo = props.userInfo;
  const { email } = getCookie('user');

  const handleClose = () => props.setShow(false);
  const handleSubmit = e => {
    const password = document.getElementById('password').value;
    const loginData = {
      email: email,
      password: password
    }
    axios.post(`${API_SERVER_HOST}/api/users/login`, loginData)
      .then(res => {
        if (res.status === 200) {
          //TODO: toast 성공 메시지 출력
          props.setShow(false);
          props.passwordCheckResult(true);
        }

      })
      .catch((err) => {
        const res = err.response;

        if (res.status === 400) {
          alert(res.data.msg);
          //toast 에러 메시지 출력
        }
      });

  }

  return (
    <div>
      <Modal
        show={props.show}
        onHide={handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div>비밀번호를 입력해주세요</div>
        </Modal.Header>
        <Modal.Body>
          <input autoFocus type="password" id="password" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CheckPasswordModal;