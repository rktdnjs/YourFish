import React from 'react'
import '../styles/nav.css'
import logo from '../images/userfeed/logo.png'
import search from '../images/userfeed/search.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <header class="header">
        <div class="header__wrapper">
            <Link to="/"><img class="header__title" src={logo}/></Link>
           
            <div class="header__center">
                <form class="header__form" onsubmit="return false">
                    <input class="header__input--text" placeholder="검색어를 입력해주세요!"/>
                    <Link to="/Search"><input class="header__input--button" src={search} type="image"/></Link>
                </form>
            </div>

            <div class="header__end">
                <li>
                    <button class="header__end--btn"><Link to="/Store" style={{textDecoration:'none', color:'inherit'}}>스토어</Link></button>
                </li>
                <li>
                    <button class="header__end--btn"><Link to="/QA" style={{textDecoration:'none', color:'inherit'}}>질문게시판</Link></button>
                </li>
                <li>
                    <button class="header__end--btn custom-btn login"><Link to="/Login" style={{textDecoration:'none', color:'inherit'}}>로그인</Link></button>
                </li>
                <li>
                    <button class="header__end--btn custom-btn register"><span><Link to="/Register" style={{textDecoration:'none', color:'inherit'}}>회원가입</Link></span></button>
                </li>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Nav