import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import jwtAxios, { API_SERVER_HOST } from "../../../util/jwtUtil";

function ChangePasswordModal(props) {
  const show = props.show;
  const userInfo = props.userInfo;
  const { userId, userType } = userInfo;

  const handleClose = () => props.setShow(false);

  const isPasswordEquals = (passwordData) => {
    return passwordData.password1 === passwordData.password2;
  }

  const handleSubmit = () => {
    const passwordData = {
      password1: document.getElementById('password1').value,
      password2: document.getElementById('password2').value
    }
    if (!isPasswordEquals(passwordData)) {
      // toast 메시지 출력. '비밀번호가 일치하지 않습니다.'
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    //TODO: 인증 성공 메시지 출력

    const editInfo = {
      password: passwordData.password1
    }

    jwtAxios.put(`${API_SERVER_HOST}/api/users/${userId}/${userType}`, editInfo)
      .then(res => {
        //TODO: 비밀번호 변경 성공 메시지 출력
      }
      );
    props.setShow(false);
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h6>비밀번호를 입력해주세요</h6>
      </Modal.Header>
      <Modal.Body>
        <table>
          <tbody>
            <tr>
              <td><h6>새 비밀번호</h6></td>
              <td><input type="password" id="password1" /></td>
            </tr>
            <tr>
              <td><h6>비밀번호 확인</h6></td>
              <td><input type="password" id="password2" /></td>
            </tr>
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ChangePasswordModal;