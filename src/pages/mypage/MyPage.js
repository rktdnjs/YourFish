import React from 'react'
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
                <div class="section__mypage__box--detail1">MODIFY</div>
                <div class="section__mypage__box--detail2">회원정보</div>
                <div class="section__mypage__box--detail3">고객님의 회원정보를 관리하는 공간입니다.</div>
              </div>
              <div onClick={goToBoard} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">BOARD</div>
                <div class="section__mypage__box--detail2">게시물 관리</div>
                <div class="section__mypage__box--detail3">고객님께서 작성하신 게시물을 관리하는 공간입니다.</div>
              </div>
              <div onClick={goToWishList} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">WISHLIST</div>
                <div class="section__mypage__box--detail2">관심상품</div>
                <div class="section__mypage__box--detail3">관심상품으로 등록하신 상품의 목록을 보여줍니다.</div>
              </div>
              <div onClick={goToService} className="section__mypage__box--detail">
                <div class="section__mypage__box--detail1">SERVICE</div>
                <div class="section__mypage__box--detail2">서비스 관리</div>
                <div class="section__mypage__box--detail3">불편사항이나 궁금한 사항을 문의하는 공간입니다.</div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MyPage