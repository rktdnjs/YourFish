import React from 'react'
import '../../styles/section.css'
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const goToModify = () => {
    navigate('/MyPage/Modify');
  };
  const goToBoard = () => {
    navigate('/MyPage/Board');
  };
  const goToWishList = () => {
    navigate('/MyPage/WishList');
  };
  const goToService = () => {
    navigate('/MyPage/Service');
  };

  //임시로 만들어 놓은 버튼
  return (
    <div>
        <section>
          <div className="section__main">
          <button onClick={goToModify} className="section__login__center__button--cancle">회원정보 수정</button>
          <button onClick={goToBoard} className="section__login__center__button--cancle">나의 게시물</button>
          <button onClick={goToWishList} className="section__login__center__button--cancle">찜 목록</button>
          <button onClick={goToService} className="section__login__center__button--cancle">고객센터</button>
          </div>
        </section>
    </div>
  )
}

export default MyPage