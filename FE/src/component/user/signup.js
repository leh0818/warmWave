import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import KakaoPost from "./kakaopost/KakaoPost"

function SignUp() {

    const [isKakaoPostOpen, setKakaoPostOpen] = useState(false);
    const [addressObj, setAddressObj] = useState({});
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const handleOpenKakaoPost = () => {
        setKakaoPostOpen(true);
    };

    const handleCloseKakaoPost = (data) => {
        console.log(data);
        setKakaoPostOpen(false);
    };

    const callFunction = (addr1, addr2) => {
        //alert(addr1+ addr2);
        setAddress1(addr1);
        setAddress2(addr2)
    }
    return (
        <section className="vh-100 bg-image m-0"
                 // style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}
        >
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: 15}}>
                                <h2 className="text-center mb-3">
                                    <small>SNS 회원가입</small>
                                </h2>
                                {/*<KakaoLogin/>*/}
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">WarmWave 회원가입</h2>
                                    <form>
                                        <div className="form-outline mb-4" style={{position: 'relative'}}>
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <label className="form-label" htmlFor="formEmail">이메일</label>
                                                <button className="button-class"
                                                        style={{border: 'none',
                                                            borderRadius: '5px',
                                                            width: 'auto',
                                                            height: '32px',
                                                            fontSize: '15px',
                                                            fontWeight: '600',
                                                            backgroundColor: '#FABA96',
                                                        }}>
                                                    중복 확인
                                                </button>
                                            </div>
                                            <input id="formEmail"
                                                   type="email"
                                                   className="form-control form-control-lg placeholder-gray-500/80"
                                                   autoComplete="email"
                                                   required
                                                   placeholder="@warmwave.kr 형식으로 입력해주세요"
                                                   name="email"
                                            />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">비밀번호</label>
                                            <input id="password" type="password"
                                                   className="form-control form-control-lg placeholder-gray-500/80"
                                                   autoComplete="current-password"
                                                   required=""
                                                   placeholder="영문,숫자를 포함한 8~16자로 입력해주세요" name="password"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="formNickName">닉네임</label>
                                            <input id="nickname" type="text"
                                                   className="form-control form-control-lg placeholder-gray-500/80"
                                                   required=""
                                                   placeholder="한글 2~20자로 입력해주세요" name="nickname"/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <label className="form-label" htmlFor="formSd">시/도</label>
                                                <button className="button-class"
                                                        onClick={handleOpenKakaoPost}
                                                        style={{border: 'none',
                                                            borderRadius: '5px',
                                                            width: 'auto',
                                                            height: '32px',
                                                            fontSize: '15px',
                                                            fontWeight: '600',
                                                            backgroundColor: '#FABA96'}}>
                                                    주소찾기
                                                </button>
                                            </div>
                                            <input type="text" id="formSd" className="form-control form-control-lg"/>
                                            {isKakaoPostOpen &&
                                                <KakaoPost close={handleCloseKakaoPost} callFunction={callFunction}/>}
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="formSgg">시/군/구</label>
                                            <input type="text" id="formSgg" className="form-control form-control-lg"
                                                   value={address1}/>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="formDetailAddr">상세주소</label>
                                            <input type="text" id="formDetailAddr"
                                                   className="form-control form-control-lg" value={address2}/>
                                        </div>
                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input className="form-check-input me-2" type="checkbox" defaultValue
                                                   id="form2Example3cg"/>
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                <a href="#!" className="text-body"><u>서비스이용약관 및 개인정보처리방침</u></a>에 동의합니다
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                    style={{backgroundColor: '#FABA96', border: 'none'}}
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">회원가입
                                            </button>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p className="text-center text-muted mt-5 mb-0">이미 회원이신가요?
                                                <Link to="/user/login" className="fw-bold text-body"><u>로그인</u></Link></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;