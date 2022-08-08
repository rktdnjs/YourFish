import React from 'react'
import '../styles/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import sidefish from '../images/login/fish.png'
import logo from '../images/userfeed/logo.png'

const Login = () => {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  const idInput = (e) => {
    setId(e.target.value)
  }
  const pwInput = (e) => {
    setPw(e.target.value)
  }

  //아이디 & 비밀번호 유효성 검사
  //아이디에 @가 포함되어있는지, 비밀번호는 8글자 이상일때 disabled된 버튼이 활성화됨
  //이메일 : @를 포함한 영문, 숫자
  //비밀번호 : 글자 수 제한(8~16) 영문, 숫자, 특수문자
  const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;
  const [button, setButton] = useState(true);
  const changeButton = () => {
    (emailValidation.test(id.trim())) && (pwValidation.test(pw.trim())) ? setButton(false) :setButton(true);
  }
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  // 임시 아이디 비번
  // 서버 데이터와 입력한 아이디 & 비번이 일치 시 로그인 성공 후 메인화면으로 이동(근데 유지는 아직 x)
  // 이후 로그인상태를 유지하기 위해선 일종의 토큰정보가 필요할것
  const realId = "12345@naver.com"
  const realPw = "12345678@a"

  const signIn = () => {
    if (realId == id) {
    if (realPw == pw) {
      goToMain();
      }
    } else {
      alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
    }
  }

  return (
    <div>
       <section>
            <div className="section__login">
                <div className="section__login__side">
                    <div className="section__login__side__image">
                        <input className="section__login__side__image1" src={sidefish} type="image"/>
                        <input className="section__login__side__image2" src={sidefish} type="image"/>
                        <input className="section__login__side__image3" src={sidefish} type="image"/>
                    </div>
                </div>
            <div className="section__login__center">
                <input className="section__login__center--logo" src={logo} type="image"/>
                <div className="section__login__center--id">이메일<br/>
                    <input onChange={idInput} onKeyUp={changeButton} placeholder='아이디를 입력해주세요' className="section__login__center--idinput"/>
                </div>
                <div className="section__login__center--pw">비밀번호<br/>
                    <input onChange={pwInput} onKeyUp={changeButton} type="password" maxLength="16" placeholder='비밀번호를 입력해주세요' className="section__login__center--idinput"/>
                </div>
                <button onClick={signIn} disabled={button} className="section__login__center--loginbtn">로그인</button>
                <div className="section__login__center--options">
                    <div className="section__login__center--searchid">아이디 찾기</div>|
                    <div className="section__login__center--searchpw">비밀번호 찾기</div>|
                    <div className="section__login__center--register">회원가입</div>
                </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Login