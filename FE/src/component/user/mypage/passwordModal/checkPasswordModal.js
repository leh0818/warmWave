import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getCookie } from "../../../util/cookieUtil";
import axios from "axios";
import { API_SERVER_HOST } from "../../../util/jwtUtil";
import useToast from '../../../hooks/useToast'

function CheckPasswordModal(props) {
  const { showToast } = useToast()
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
          showToast('비민번호 인증에 성공하였습니다.', 'success')
          props.setShow(false);
          props.passwordCheckResult(true);
        }
      })
      .catch((err) => {
        const res = err.response;

        if (res.status === 400) {
          showToast('비밀번호가 일치하지 않습니다.', 'error')
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
          <h6>비밀번호를 입력해주세요</h6>
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