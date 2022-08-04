import React from 'react'
import '../styles/nav.css'

const Nav = () => {
  return (
    <div>
        <header class="header">
        <div class="header__wrapper">
            <input class="header__title" src="../images/userfeed/logo.png" type="image" onclick="location.href='index.html'"/>
           
            <div class="header__center">
                <form class="header__form" onsubmit="return false">
                    <input class="header__input--text" placeholder="검색어를 입력해주세요!"/>
                    <input class="header__input--button" src="image/유저피드/돋보기.png" type="image"/>
                </form>
            </div>

            <div class="header__end">
                <li>
                    <button class="header__end--btn" onclick="location.href='store.html'">스토어</button>
                </li>
                <li>
                    <button class="header__end--btn" onclick="location.href='qa.html'">질문게시판</button>
                </li>
                <li>
                    <button class="header__end--btn custom-btn login" onclick="location.href='login.html'">로그인</button>
                </li>
                <li>
                    <button class="header__end--btn custom-btn register" onclick="location.href='register.html'"><span>회원가입</span></button>
                </li>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Nav