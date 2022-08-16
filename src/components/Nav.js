import React from 'react'
import logo from '../images/userfeed/logo.png'
import search from '../images/userfeed/search.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/nav.css'
import Swal from 'sweetalert2'

const Nav = () => { 
  const logOut = () => {
    localStorage.removeItem("회원토큰");
    Swal.fire({
        icon:'success',
        title:'로그아웃 완료!',
        text:'우리 다음에 또 만나요 :) ',
        confirmButtonText:'확인',
        confirmButtonColor:'#3085d6'
      })
    goToMain();
  }
  
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div>
        <header className="header">
        <div className="header__wrapper">
            <Link to="/"><img className="header__title" src={logo}/></Link>
           
            <div className="header__center">
                <form className="header__form">
                    <input className="header__input--text" placeholder="검색어를 입력해주세요!"/>
                    <Link to="/Search"><input className="header__input--button" src={search} type="image"/></Link>
                </form>
            </div>

            <div className="header__end">
                <li>
                    <button className="header__end--btn"><Link to="/QA" style={{textDecoration:'none', color:'inherit'}}>질문게시판</Link></button>
                </li>
                <li>
                    <button className="header__end--btn"><Link to="/Store" style={{textDecoration:'none', color:'inherit'}}>스토어</Link></button>
                </li>
                <li>
                    <button className="header__end--btn custom-btn login">
                        {localStorage.getItem("회원토큰") == "회원토큰" ? 
                        <div onClick={logOut} style={{textDecoration:'none', color:'inherit'}}>로그아웃</div> 
                        : <Link to="/Login" style={{textDecoration:'none', color:'inherit'}}>로그인</Link>}
                    </button>
                </li>
                <li>
                    <button className="header__end--btn custom-btn register">
                    <span>{localStorage.getItem("회원토큰") == "회원토큰" ? 
                        <Link to="/MyPage" style={{textDecoration:'none', color:'inherit'}}>마이페이지</Link>
                    :   <Link to="/Register" style={{textDecoration:'none', color:'inherit'}}>회원가입</Link>}</span>
                    </button>
                </li> 
            </div>
        </div>
        </header>
    </div>
  )
}

export default Nav
