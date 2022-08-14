import React from 'react'
import '../../styles/modify.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const Modify = () => {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  let [repw, setRepw] = useState('');
  let [name, setName] = useState('');
  let [nickname, setNickname] = useState('');

  const idInput = (e) => {
    setId(e.target.value)
  }
  const pwInput = (e) => {
    setPw(e.target.value)
  }
  const repwInput = (e) => {
    setRepw(e.target.value)
  }
  const nameInput = (e) => {
    setName(e.target.value)
  }
  const nicknameInput = (e) => {
    setNickname(e.target.value)
  }

  //이메일 & 패스워드 & 닉네임 유효성 검사, 조건은 아래 폼 문구에 있는 내용과 동일
  //이름은 최소 2글자 이상 시에만 버튼 활성화
  const nicknameValidation = /^[가-힣a-z]{4,16}$/;
  const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  const pwValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;
  const [button, setButton] = useState(true);
  const changeButton = () => {
    (emailValidation.test(id.trim())) && (pwValidation.test(pw.trim())) && (pw === repw) && (nicknameValidation.test(nickname.trim()) && (name.length > 1))
    ? setButton(false) : setButton(true);
  }
  
  const navigate = useNavigate();
  const goToMyPage = () => {
    navigate('/MyPage');
  };

  //백엔드 서버로 나중에 PUT으로 변경(임시로 post)
  //일단 임시로 users에다가 연결시켜놓음
  const signUp = () => {
    axios.post("http://localhost:4000/users" , {
      username : name,
      password : pw,
      password2 : repw,
      email : id,
      nickname : nickname
    })
    .then((response) => {
      console.log(response);
      if(response.status === 201) {
        localStorage.setItem("userid", id);
        localStorage.setItem("userpw", pw);
        localStorage.setItem("username", name);
        localStorage.setItem("userNickname", nickname);
        Swal.fire({
          icon:'success',
          text:"회원정보 수정 완료!!!",
          confirmButtonText:'확인',
          confirmButtonColor:'#3085d6'
        })
        goToMyPage(); 
      }
    })
    .catch((error) => console.log(error.response));
  }
  
  return (
    <div>
       <section>
            <div className="section__login">
              <div className="section__login__center">
                  <div className='section__login__center--title'>MODIFY</div>
                  <div className="section__login__center--id">이메일<br/>
                      <input onChange={idInput} onKeyUp={changeButton} placeholder='아이디를 입력해주세요' className="section__login__center--idinput"/>
                  </div>
                  <div className="section__login__center--pw"><span>비밀번호</span><span className='section__login__center--side'>영문 대소문자/숫자/특수문자 포함 8자~16자</span><br/>
                      <input onChange={pwInput} onKeyUp={changeButton} maxLength="16" type="password" placeholder='비밀번호를 입력해주세요' className="section__login__center--idinput"/>
                  </div>
                  <div className="section__login__center--pw">비밀번호 확인<br/>
                      <input onChange={repwInput} onKeyUp={changeButton} maxLength="16" type="password" placeholder='비밀번호를 다시 한 번 입력해주세요' className="section__login__center--idinput"/>
                  </div>
                  <div className="section__login__center--pw">이름<br/>
                      <input onChange={nameInput} onKeyUp={changeButton} placeholder='이름을 입력해주세요' className="section__login__center--idinput"/>
                  </div>
                  <div className="section__login__center--pw"><span>닉네임</span><span className='section__login__center--side1'>영문 소문자&한글 아무렇게 4자~16자</span><br/>
                      <input onChange={nicknameInput} onKeyUp={changeButton} maxLength="16" placeholder='닉네임을 입력해주세요' className="section__login__center--idinput"/>
                  </div>
                  <div className="section__login__center__button">
                    <button disabled={button} onClick={signUp} className="section__login__center__button--change">회원정보 수정</button>
                    <button onClick={goToMyPage} className="section__login__center__button--cancle">취소</button>
                  </div>
              </div>
          </div>
      </section> 
    </div>
  )
}

export default Modify