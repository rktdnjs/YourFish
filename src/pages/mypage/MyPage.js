import React from 'react'
import '../../styles/section.css'
import '../../styles/mypage.css'
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
          <div className="section__mypage section__main">
            <div className="section__mypage--title">MY PAGE</div>
            <div className="section__mypage__box">
              <div onClick={goToModify} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">1</div>
                <div class="section__mypage__box--detail2">2</div>
                <div class="section__mypage__box--detail3">3</div>
              </div>
              <div onClick={goToBoard} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">1</div>
                <div class="section__mypage__box--detail2">2</div>
                <div class="section__mypage__box--detail3">3</div>
              </div>
              <div onClick={goToWishList} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">1</div>
                <div class="section__mypage__box--detail2">1</div>
                <div class="section__mypage__box--detail3">1</div>
              </div>
              <div onClick={goToService} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">1</div>
                <div class="section__mypage__box--detail2">1</div>
                <div class="section__mypage__box--detail3">1</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MyPage